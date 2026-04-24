// One-shot favicon + OG image generator.
// Run with: node scripts/generate-favicons.mjs
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const SRC = resolve(root, "src/assets/images/logos/catalyst-blue.png");
const OUT = resolve(root, "public");

await mkdir(OUT, { recursive: true });

// --- Favicons ---
// Catalyst-blue PNG already has transparent background and is square-ish.
// We trim padding then resize to standard sizes.
const trimmed = sharp(SRC).trim();

const sizes = [
  { name: "favicon-16.png", size: 16 },
  { name: "favicon-32.png", size: 32 },
  { name: "favicon-48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await trimmed
    .clone()
    .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT, name));
  console.log("wrote", name);
}

// --- ICO file (multi-resolution, 16/32/48) ---
// sharp can't write .ico, but most browsers happily use the .png link tags.
// We still ship favicon.ico (kept from Astro template) — leave it alone.

// --- OG share image (1200x630, brand-blue background, centered logo) ---
const blueBg = await sharp({
  create: { width: 1200, height: 630, channels: 4, background: { r: 0, g: 46, b: 93, alpha: 1 } },
}).png().toBuffer();

const logoLg = await trimmed.clone().resize({ width: 320, height: 320, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

await sharp(blueBg)
  .composite([{ input: logoLg, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(resolve(OUT, "og-image.png"));
console.log("wrote og-image.png");

// --- Web app manifest ---
const manifest = {
  name: "Catalyst Energy Advisors",
  short_name: "Catalyst",
  start_url: "/",
  display: "browser",
  background_color: "#ffffff",
  theme_color: "#002E5D",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
};
await writeFile(resolve(OUT, "site.webmanifest"), JSON.stringify(manifest, null, 2));
console.log("wrote site.webmanifest");
