import fs from "fs";
import path from "path";

/**
 * Returns true if a file exists under /public. Evaluated at build time
 * (server-only), so a page can render a placeholder until the real asset
 * is dropped in, then automatically pick it up on the next build.
 */
export function publicAssetExists(relPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relPath.replace(/^\//, "")));
  } catch {
    return false;
  }
}
