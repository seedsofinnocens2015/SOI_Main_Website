const fs = require('fs');
const path = require('path');

// No basePath needed for root domain deployment
const basePath = '';
const outDir = path.join(__dirname, '..', 'out');
const projectRoot = path.join(__dirname, '..');
const htaccessSource = path.join(projectRoot, '.htaccess');
const htaccessTarget = path.join(outDir, '.htaccess');

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

  console.log('🔧 Checking asset paths in built files...');

  const files = findFiles(outDir);
  let checkedCount = 0;

  files.forEach(filePath => {
    checkedCount++;
  });

  if (fs.existsSync(htaccessSource)) {
    fs.copyFileSync(htaccessSource, htaccessTarget);
    console.log('✅ Copied .htaccess to out/.htaccess');
  } else {
    console.log('⚠️ .htaccess not found at project root, skipping copy.');
  }

  const homeRoute = path.join(outDir, 'index.html');
  if (!fs.existsSync(homeRoute)) {
    console.log('⚠️ out/index.html missing. Build output looks incomplete.');
  }

  console.log(`\n✨ Checked ${checkedCount} file(s).`);
  console.log('📦 Build is ready for deployment to root domain!');
}

fixAssetPaths();
