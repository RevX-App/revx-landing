// Renders public/og.png (1200x630) from an inline SVG. Run: node scripts/og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#07090b"/>
  <g fill="none" stroke-width="3">
    ${['#38bdf8', '#f5a524', '#2a333b', '#2a333b', '#2a333b', '#2a333b', '#2a333b']
      .map((c, i) => `<circle cx="${300 + i * 100}" cy="120" r="26" stroke="${c}" ${i < 2 ? `fill="${c}"` : ''}/>`)
      .join('')}
  </g>
  <text x="600" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="150" font-weight="700" letter-spacing="-4"><tspan fill="#c8c8c8">Rev</tspan><tspan fill="#38bdf8" font-weight="900">X</tspan></text>
  <text x="600" y="430" text-anchor="middle" font-family="Arial Narrow, Arial, sans-serif" font-size="52" font-weight="700" fill="#eceff1">The mechanic at your door.</text>
  <text x="600" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#9aa3ad">Post it · Get an AI read · Match with a San Diego mechanic</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));
console.log('wrote public/og.png');
