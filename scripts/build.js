#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const assetsDir = path.join(publicDir, 'assets');

console.log('==================================================================');
console.log(' MUHAMMAD AUWAL ALIYU (ABU MUS\'AB) — NODE PRODUCTION COMPILER');
console.log('==================================================================');

// 1. Clean & prepare dist
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });

// 2. Compile JSX
console.log(' [1/4] Compiling React App.jsx with Babel...');
require('./compile_jsx.js');

// 3. Recursive copy function
function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy assets
console.log(' [2/4] Synchronizing static assets to dist/assets/...');
if (fs.existsSync(assetsDir)) {
  copyDirRecursive(assetsDir, path.join(distDir, 'assets'));
  console.log('       [✓] Copied assets folder to dist/assets/');
}

// 4. Copy Root Files
console.log(' [3/4] Copying root production web files...');
const rootFiles = ['index.html', 'manifest.json', 'robots.txt', 'sitemap.xml', 'sw.js', 'app.js', '_headers', '_redirects'];
for (const file of rootFiles) {
  const src = path.join(publicDir, file);
  const dst = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    console.log(`       [✓] ${file} -> dist/${file}`);
  }
}

// 5. Verify Build
console.log(' [4/4] Verifying build integrity...');
const distIndex = path.join(distDir, 'index.html');
const distApp = path.join(distDir, 'app.js');
if (fs.existsSync(distIndex) && fs.existsSync(distApp)) {
  console.log(`       [✓] dist/index.html (${fs.statSync(distIndex).size} bytes)`);
  console.log(`       [✓] dist/app.js (${fs.statSync(distApp).size} bytes)`);
}

console.log('==================================================================');
console.log(' PRODUCTION BUILD COMPLETE: READY FOR HOSTING OR LOCAL PREVIEW');
console.log('==================================================================');
