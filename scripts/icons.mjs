// Renders the PNG icon set from public/favicon.svg. Run: node scripts/icons.mjs
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const pub = (f) => new URL(`../public/${f}`, import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const svg = readFileSync(pub('favicon.svg'));

// Apple ignores transparency and rounds corners itself, so its icon is a full-bleed square.
const square = Buffer.from(
  svg.toString().replace('rx="14"', 'rx="0"'),
);

const jobs = [
  ['favicon-48x48.png', 48, svg],
  ['icon-192.png', 192, svg],
  ['icon-512.png', 512, svg],
  ['apple-touch-icon.png', 180, square],
];

for (const [file, size, src] of jobs) {
  await sharp(src, { density: 384 }).resize(size, size).png().toFile(pub(file));
  console.log(`wrote public/${file} (${size}px)`);
}
