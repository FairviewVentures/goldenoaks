// Converts photos to web-ready .webp files for public/assets.
//
// Usage: npm run images -- path/to/photo1.jpg path/to/photo2.heic ...
//
// For each input it writes:
//   public/assets/<name>.webp         (longest side up to 1600px)
//   public/assets/thumbs/<name>.webp  (640px wide, used in grids and thumbnails)
// and prints the width/height to paste into config.ts.
import path from "node:path";
import { mkdir, rename } from "node:fs/promises";
import sharp from "sharp";

const FULL = 1600;
const THUMB = 640;
const out = path.resolve("public/assets");

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: npm run images -- <image files>");
  process.exit(1);
}

await mkdir(path.join(out, "thumbs"), { recursive: true });

for (const file of files) {
  const name = path.parse(file).name;
  const full = path.join(out, `${name}.webp`);
  const tmp = `${full}.tmp`;
  // Write to a temp file first so an asset can be re-optimized in place.
  const info = await sharp(file)
    .rotate()
    .resize({
      width: FULL,
      height: FULL,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toFile(tmp);
  await sharp(tmp)
    .resize({ width: THUMB, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(out, "thumbs", `${name}.webp`));
  await rename(tmp, full);
  console.log(
    `{ src: "/assets/${name}.webp", width: ${info.width}, height: ${info.height} },`,
  );
}
