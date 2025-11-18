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
        content = content.replace(/(<img[^>]*src=["'])\/assets\//g, `$1${basePath}/assets/`);
        modified = true;
      }
      
      // Fix link href="/assets/..." for stylesheets, etc.
      const linkHrefPattern = /(<link[^>]*href=["'])\/assets\//g;
      if (linkHrefPattern.test(content)) {
        content = content.replace(/(<link[^>]*href=["'])\/assets\//g, `$1${basePath}/assets/`);
        modified = true;
      }
    }

    // Fix JS asset references (if any)
    // Match: "/assets/..." or '/assets/...' but skip if already has basePath
    if (filePath.endsWith('.js')) {
      // Simple approach: replace all "/assets/" with "/new/assets/" but avoid double replacement
      const jsAssetPattern = /(['"])\/assets\//g;
      if (jsAssetPattern.test(content) && !content.includes(`${basePath}/assets/`)) {
        content = content.replace(/(['"])\/assets\//g, `$1${basePath}/assets/`);
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

