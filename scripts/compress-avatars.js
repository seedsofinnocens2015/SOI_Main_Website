/**
 * One-shot resizer for testimonial avatars (and similar large profile PNGs).
 * They are rendered at 80x80 in the UI but were shipped at full resolution.
 * Run with: `node scripts/compress-avatars.js`
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG = path.join(__dirname, '..', 'public', 'assets', 'img');

const targets = [
  '1.png', '2.png', '3.png', '4.png', '5.webp', '6.png', '7.png',
  'happy_family.png',
  'self_cycle_selfie.png',
];

(async () => {
  for (const name of targets) {
    const file = path.join(IMG, name);
    if (!fs.existsSync(file)) {
      console.log(`skip (missing): ${name}`);
      continue;
    }
    const orig = fs.statSync(file).size;
    const buf = fs.readFileSync(file);
    let pipeline = sharp(buf, { failOn: 'none' }).rotate();
    const meta = await pipeline.metadata().catch(() => ({}));

    // Avatars are shown at 80x80 across the page; cap source at 320 px so
    // retina screens still get a crisp result without 1+ MB downloads.
    const maxWidth = name === 'happy_family.png' || name === 'self_cycle_selfie.png' ? 1200 : 320;
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    const ext = path.extname(name).toLowerCase();
    let out;
    if (ext === '.png') {
      out = await pipeline.png({ quality: 70, compressionLevel: 9, palette: true }).toBuffer();
    } else if (ext === '.webp') {
      out = await pipeline.webp({ quality: 70 }).toBuffer();
    } else {
      out = await pipeline.jpeg({ quality: 75, mozjpeg: true }).toBuffer();
    }

    if (out.length < orig) {
      fs.writeFileSync(file, out);
      console.log(`${name}: ${(orig/1024).toFixed(0)} KB -> ${(out.length/1024).toFixed(0)} KB`);
    } else {
      console.log(`${name}: no gain`);
    }
  }
})();
