import { brotliCompressSync, constants, gzipSync } from "node:zlib";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const distDir = new URL("../dist", import.meta.url);
const compressibleExtensions = new Set([
  ".css",
  ".html",
  ".ico",
  ".js",
  ".json",
  ".map",
  ".svg",
  ".txt",
]);

function walk(dirUrl) {
  return readdirSync(dirUrl, { withFileTypes: true }).flatMap((entry) => {
    const entryUrl = new URL(entry.name, `${dirUrl.href}/`);
    return entry.isDirectory() ? walk(entryUrl) : [entryUrl];
  });
}

for (const fileUrl of walk(distDir)) {
  const filePath = fileURLToPath(fileUrl);
  const extension = filePath.slice(filePath.lastIndexOf("."));

  if (!compressibleExtensions.has(extension)) {
    continue;
  }

  const source = readFileSync(filePath);

  writeFileSync(`${filePath}.gz`, gzipSync(source, { level: 9 }));
  writeFileSync(
    `${filePath}.br`,
    brotliCompressSync(source, {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: 11,
      },
    })
  );

  const stats = statSync(fileUrl);
  console.log(`compressed ${join(...filePath.split("/").slice(-2))} (${stats.size} bytes)`);
}
