import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const envFile = join(projectRoot, ".env.production");
const distAssetsDir = join(projectRoot, "dist", "assets");

if (!existsSync(envFile)) {
  console.error("Missing .env.production");
  process.exit(1);
}

const envContents = readFileSync(envFile, "utf8");
const distIndexPath = join(projectRoot, "dist", "index.html");

if (!/VITE_ENABLE_ANALYTICS=(true|false)/.test(envContents)) {
  console.error("Expected VITE_ENABLE_ANALYTICS in .env.production");
  process.exit(1);
}

if (!existsSync(distIndexPath)) {
  console.error("dist/index.html is missing. Run the production build before check:env.");
  process.exit(1);
}

const indexHtml = readFileSync(distIndexPath, "utf8");
const bundleFileName = indexHtml.match(/assets\/([^"]+\.js)/)?.[1];

if (!bundleFileName) {
  console.error("Could not locate the built JavaScript bundle in dist/index.html");
  process.exit(1);
}

const bundle = readFileSync(join(distAssetsDir, bundleFileName), "utf8");

for (const disallowedToken of ["react-refresh", "lovable-tagger", "vite/client"]) {
  if (bundle.includes(disallowedToken)) {
    console.error(`Unexpected dev-only token in production bundle: ${disallowedToken}`);
    process.exit(1);
  }
}

console.log(".env.production is present and the production bundle does not include obvious dev-only tokens.");
