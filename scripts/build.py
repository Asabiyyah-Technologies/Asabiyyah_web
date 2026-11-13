#!/usr/bin/env python3
"""
Muhammad Auwal Aliyu (Abu Mus'ab) — Complete Portfolio Compiler
Compiles HTML, JSX React application, static assets, and PWA service worker.
"""
import os
import sys
import shutil
import subprocess

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(BASE_DIR, "dist")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
ASSETS_DIR = os.path.join(PUBLIC_DIR, "assets")

def build():
    print("==================================================================")
    print(" MUHAMMAD AUWAL ALIYU (ABU MUS'AB) — PRODUCTION COMPILER")
    print("==================================================================")

    # 1. Clean & Prepare dist/
    os.makedirs(DIST_DIR, exist_ok=True)
    os.makedirs(PUBLIC_DIR, exist_ok=True)

    # 2. Compile JSX React application
    print(" [1/4] Compiling React App.jsx with Node & Babel...")
    compile_script = os.path.join(BASE_DIR, "scripts", "compile_jsx.js")
    res = subprocess.run(["node", compile_script], capture_output=True, text=True, shell=True)
    if res.returncode != 0:
        print("Error compiling JSX:", res.stderr)
        sys.exit(1)
    print("       " + res.stdout.strip())

    # 3. Synchronize static public assets to dist/
    print(" [2/4] Synchronizing static assets to dist/assets/...")
    dist_assets = os.path.join(DIST_DIR, "assets")
    if os.path.exists(ASSETS_DIR):
        shutil.copytree(ASSETS_DIR, dist_assets, dirs_exist_ok=True)
        print("       [✓] Copied assets folder to dist/assets/")

    # 4. Copy Root Files (index.html, manifest, robots, sitemap, sw)
    print(" [3/4] Copying root production web files...")
    root_files = ["index.html", "manifest.json", "robots.txt", "sitemap.xml", "sw.js", "app.js"]
    for rf in root_files:
        src = os.path.join(PUBLIC_DIR, rf)
        dst = os.path.join(DIST_DIR, rf)
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"       [✓] {rf} -> dist/{rf}")

    # 5. Verify Build Integrity
    print(" [4/4] Verifying build integrity...")
    dist_index = os.path.join(DIST_DIR, "index.html")
    dist_app = os.path.join(DIST_DIR, "app.js")
    if os.path.exists(dist_index) and os.path.exists(dist_app):
        print(f"       [✓] dist/index.html ({os.path.getsize(dist_index)} bytes)")
        print(f"       [✓] dist/app.js ({os.path.getsize(dist_app)} bytes)")
    
    print("==================================================================")
    print(" PRODUCTION BUILD COMPLETE: READY FOR HOSTING OR LOCAL PREVIEW")
    print("==================================================================")

if __name__ == "__main__":
    build()
