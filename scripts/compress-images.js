/**
 * Image compression helper.
 *
 * Run with: `node scripts/compress-images.js`
 *
 * - Walks `public/assets/img` recursively.
 * - Re-encodes JPG/PNG files larger than MIN_SIZE_KB as optimized WebP next to
 *   the original (e.g. `4.png` -> `4.png.webp`) and leaves the original in
 *   place so existing references keep working. Next/Image will pick up the
 *   smaller source automatically once you switch the path.
 * - Optionally overwrites the original WebP/PNG/JPG with a recompressed
 *   version when --inplace flag is passed.
 *
 * Why: testimonial avatars are currently ~1.3MB PNGs displayed at 80x80 –
 * even with Next.js image optimization on, smaller source files reduce
 * cold-cache transform time and disk usage dramatically.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..', 'public', 'assets', 'img');
const MIN_SIZE_KB = 100; // only touch files bigger than this
const MAX_WIDTH = 1920;
const args = new Set(process.argv.slice(2));
const INPLACE = args.has('--inplace');
const VERBOSE = args.has('--verbose');

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (exts.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function compressOne(file) {
  const stat = fs.statSync(file);
  if (stat.size < MIN_SIZE_KB * 1024) return null;

  const ext = path.extname(file).toLowerCase();
  const buf = fs.readFileSync(file);

  let pipeline = sharp(buf, { failOn: 'none' }).rotate();
  const meta = await pipeline.metadata().catch(() => ({}));
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let out;
  let outPath;

  if (INPLACE) {
    outPath = file;
    if (ext === '.png') {
      out = await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
    } else if (ext === '.webp') {
      out = await pipeline.webp({ quality: 78 }).toBuffer();
    } else {
      out = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
    }
  } else {
    outPath = `${file}.webp`;
    out = await pipeline.webp({ quality: 78 }).toBuffer();
  }

  if (out.length >= buf.length) {
    if (VERBOSE) console.log(`= ${path.relative(ROOT, file)} (no gain)`);
    return null;
  }

  fs.writeFileSync(outPath, out);
  const savedKB = ((buf.length - out.length) / 1024).toFixed(1);
  console.log(
    `${INPLACE ? '~' : '+'} ${path.relative(ROOT, outPath)}  -${savedKB} KB ` +
      `(${(buf.length / 1024).toFixed(0)} -> ${(out.length / 1024).toFixed(0)} KB)`
  );
  return { saved: buf.length - out.length };
}

async function main() {
  if (!fs.existsSync(ROOT)) {
    console.log(`No image directory at ${ROOT}`);
    return;
  }
  const files = walk(ROOT);
  let totalSaved = 0;
  let touched = 0;
  for (const f of files) {
    try {
      const r = await compressOne(f);
      if (r) {
        totalSaved += r.saved;
        touched += 1;
      }
    } catch (err) {
      console.warn(`! ${path.relative(ROOT, f)} - ${err.message}`);
    }
  }
  console.log(`\nDone. Touched ${touched} files, saved ${(totalSaved / 1024 / 1024).toFixed(2)} MB.`);
  if (!INPLACE) {
    console.log('Tip: re-run with `--inplace` to overwrite the originals once you have verified the .webp output.');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
