// Generate the social preview from the site's monogram artwork without using
// a personal photo that is not present in the supplied resume.
import sharp from 'sharp';
import { mkdirSync, readFileSync } from 'node:fs';

const output = 'public/assets';
mkdirSync(output, { recursive: true });
const mark = await sharp(readFileSync(`${output}/gk-monogram.svg`)).resize({ width: 160 }).png().toBuffer();
const title = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="glow" cx="72%" cy="46%" r="55%"><stop offset="0" stop-color="#589C80" stop-opacity=".45"/><stop offset="1" stop-color="#132228" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#132228"/><rect width="1200" height="630" fill="url(#glow)"/>
  <text x="72" y="280" font-family="Arial, sans-serif" font-size="96" font-weight="700" fill="#F5EED2">GOVIND KHANDELWAL</text>
  <text x="78" y="344" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="#589C80" letter-spacing="7">AI · GENERATIVE AI · FULL-STACK</text>
  <text x="78" y="405" font-family="Arial, sans-serif" font-size="20" fill="#a3b8b1">B.Tech Mathematics &amp; Computing · Delhi Technological University</text>
</svg>`);

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#132228' } })
  .composite([
    { input: title },
    { input: mark, top: 205, left: 1000 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(`${output}/og-image.jpg`);

console.log('Social preview generated.');
