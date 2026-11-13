const fs = require('fs');
const path = require('path');
const Babel = require('../public/assets/vendor/babel.min.js');

const rootDir = path.resolve(__dirname, '..');
const srcFile = path.join(rootDir, 'src', 'App.jsx');
const publicOut = path.join(rootDir, 'public', 'app.js');
const distOut = path.join(rootDir, 'dist', 'app.js');

if (!fs.existsSync(srcFile)) {
  console.error('Source file not found:', srcFile);
  process.exit(1);
}

console.log('Compiling src/App.jsx with Babel (classic runtime for zero imports)...');
const start = Date.now();
const srcCode = fs.readFileSync(srcFile, 'utf8');

const transformed = Babel.transform(srcCode, {
  presets: [
    ['react', { runtime: 'classic' }]
  ]
}).code;

// Wrap in safe IIFE
const bundle = `/* Muhammad Auwal Aliyu (Abu Mus'ab) — Standalone React Application Bundle */
(function() {
  'use strict';
  const { useState, useEffect, useMemo, useRef } = React;

${transformed}

})();
`;

fs.writeFileSync(publicOut, bundle, 'utf8');
fs.writeFileSync(distOut, bundle, 'utf8');
console.log(`[✓] Successfully compiled in ${Date.now() - start}ms`);
console.log(`[✓] Output: public/app.js (${fs.statSync(publicOut).size} bytes)`);
console.log(`[✓] Output: dist/app.js (${fs.statSync(distOut).size} bytes)`);
