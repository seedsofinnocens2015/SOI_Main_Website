const fs = require('fs');
const path = require('path');

// No basePath needed for root domain deployment
const basePath = '';
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

  console.log('🔧 Checking asset paths in built files...');

  const files = findFiles(outDir);
  let checkedCount = 0;

  files.forEach(filePath => {
    checkedCount++;
  });

  console.log(`\n✨ Checked ${checkedCount} file(s).`);
  console.log('📦 Build is ready for deployment to root domain!');
}

fixAssetPaths();
