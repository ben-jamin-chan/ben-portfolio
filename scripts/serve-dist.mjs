import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const distDir = join(process.cwd(), "dist");

const contentTypes = {
  ".avif": "image/avif",
  ".br": "application/octet-stream",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function resolveAssetPath(urlPath) {
  const safePath = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = join(distDir, safePath === "/" ? "index.html" : safePath);
  return existsSync(requestedPath) ? requestedPath : join(distDir, "index.html");
}

function getCacheControl(filePath) {
  if (filePath.includes(join(distDir, "assets"))) {
    return "public, max-age=31536000, immutable";
  }

  if (filePath.endsWith(".html")) {
    return "public, max-age=0, must-revalidate";
  }

  return "public, max-age=3600";
}

createServer((req, res) => {
  const assetPath = resolveAssetPath(req.url || "/");
  const acceptEncoding = req.headers["accept-encoding"] || "";
  const wantsBrotli = typeof acceptEncoding === "string" && acceptEncoding.includes("br");
  const wantsGzip = typeof acceptEncoding === "string" && acceptEncoding.includes("gzip");
  const brotliPath = `${assetPath}.br`;
  const gzipPath = `${assetPath}.gz`;

  let filePath = assetPath;

  if (wantsBrotli && existsSync(brotliPath)) {
    filePath = brotliPath;
    res.setHeader("Content-Encoding", "br");
  } else if (wantsGzip && existsSync(gzipPath)) {
    filePath = gzipPath;
    res.setHeader("Content-Encoding", "gzip");
  }

  const originalExtension = extname(assetPath);
  res.setHeader("Content-Type", contentTypes[originalExtension] || "application/octet-stream");
  res.setHeader("Cache-Control", getCacheControl(assetPath));
  res.setHeader("Vary", "Accept-Encoding");
  res.setHeader("Content-Length", statSync(filePath).size);

  createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`Static perf server listening on http://127.0.0.1:${port}`);
});
