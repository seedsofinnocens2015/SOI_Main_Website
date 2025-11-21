const fs = require('fs');
const path = require('path');

const basePath = '/new';
const outDir = path.join(__dirname, '..', 'out');

// Function to recursively find all CSS, JS, and HTML files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to fix asset paths in files
function fixAssetPaths() {
  if (!fs.existsSync(outDir)) {
    console.log('❌ out directory not found. Please run "npm run build" first.');
    return;
  }

  console.log('🔧 Fixing asset paths in built files...');

  const files = findFiles(outDir);
  let fixedCount = 0;

  files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix CSS background-image URLs
    // Match: url("/assets/...") or url('/assets/...')
    const urlPattern = /url\((['"]?)\/assets\//g;
    if (urlPattern.test(content)) {
      content = content.replace(/url\((['"]?)\/assets\//g, `url($1${basePath}/assets/`);
      modified = true;
    }

    // Fix HTML image src and other asset references
    if (filePath.endsWith('.html')) {
      // Fix img src="/assets/..."
      const imgSrcPattern = /(<img[^>]*src=["'])\/assets\//g;
      if (imgSrcPattern.test(content)) {
        content = content.replace(imgSrcPattern, `$1${basePath}/assets/`);
        modified = true;
      }

      // Fix video/audio source tags
      const mediaSourcePattern = /(<(?:source|track)[^>]*src=["'])\/assets\//g;
      if (mediaSourcePattern.test(content)) {
        content = content.replace(mediaSourcePattern, `$1${basePath}/assets/`);
        modified = true;
      }

      // Fix video poster attributes
      const videoPosterPattern = /(<video[^>]*poster=["'])\/assets\//g;
      if (videoPosterPattern.test(content)) {
        content = content.replace(videoPosterPattern, `$1${basePath}/assets/`);
        modified = true;
      }

      // Fix generic data-src/data-bg attributes
      const dataSrcPattern = /(<[^>]*data-(?:src|bg|background)=["'])\/assets\//g;
      if (dataSrcPattern.test(content)) {
        content = content.replace(dataSrcPattern, `$1${basePath}/assets/`);
        modified = true;
      }
      
      // Fix link href="/assets/..." for stylesheets, etc.
      const linkHrefPattern = /(<link[^>]*href=["'])\/assets\//g;
      if (linkHrefPattern.test(content)) {
        content = content.replace(linkHrefPattern, `$1${basePath}/assets/`);
        modified = true;
      }
    }

    // Fix JS asset references (if any)
    // Match: "/assets/..." or '/assets/...'
    if (filePath.endsWith('.js')) {
      const jsAssetPattern = /(['"])\/assets\//g;
      let jsMatched = false;

      content = content.replace(jsAssetPattern, (match, quote, offset, string) => {
        jsMatched = true;
        const before = string.slice(Math.max(0, offset - basePath.length), offset);
        if (before === basePath) {
          return match;
        }
        return `${quote}${basePath}/assets/`;
      });

      if (jsMatched) {
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(outDir, filePath)}`);
    }
  });

  console.log(`\n✨ Fixed ${fixedCount} file(s).`);
  console.log('📦 Build is ready for deployment!');
}

fixAssetPaths();

