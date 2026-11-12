#!/usr/bin/env python3
"""
Asabiyyah Technologies Ltd — Static Site Compiler
Builds the production static site into `dist/` from Python page templates and JSON datasets.
Outputs clean directory routes for Cloudflare Pages.
"""
import os
import sys
import json
import shutil
import time
from datetime import datetime

# Enforce UTF-8 encoding for Windows terminals
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DATA_DIR = os.path.join(BASE_DIR, "src", "data")

# Import Page Generators
sys.path.insert(0, BASE_DIR)
from src.pages.home import render_home_page
from src.pages.about import render_about_page
from src.pages.services import render_services_page
from src.pages.products import render_products_page
from src.pages.engineering import render_engineering_page
from src.pages.contact import render_contact_page
from src.pages.legal import render_legal_page

def load_json(filename):
    filepath = os.path.join(DATA_DIR, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

def generate_sitemap(routes, output_path):
    base_url = "https://www.asabiyyah.com"
    today = datetime.now().strftime("%Y-%m-%d")
    
    xml_entries = []
    for r in routes:
        loc = f"{base_url}{r['path']}" if r['path'] != "/" else f"{base_url}/"
        xml_entries.append(f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{r.get('changefreq', 'monthly')}</changefreq>
    <priority>{r.get('priority', '0.8')}</priority>
  </url>""")
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{"\n".join(xml_entries)}
</urlset>"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(xml_content)

def build():
    start_time = time.time()
    print("==================================================================")
    print(" ASABIYYAH TECHNOLOGIES LTD — STATIC SITE COMPILER")
    print(" Building production artifacts for Cloudflare Pages...")
    print("==================================================================")

    # 1. Clean and Recreate dist directory
    if os.path.exists(DIST_DIR):
        shutil.rmtree(DIST_DIR)
    os.makedirs(DIST_DIR, exist_ok=True)
    print(" [✓] Initialized fresh dist/ output directory.")

    # 2. Load Single-Source-of-Truth Datasets
    company_data = load_json("company.json")
    services_data = load_json("services.json")
    products_data = load_json("products.json")
    team_data = load_json("team.json")
    print(f" [✓] Loaded corporate datasets ({len(services_data)} practices, {len(products_data)} products, {len(team_data)} leaders).")

    # 3. Define Routes and Output Destinations
    routes = [
        {
            "name": "Home",
            "path": "/",
            "out_file": os.path.join(DIST_DIR, "index.html"),
            "renderer": lambda: render_home_page(company_data, services_data, products_data, team_data),
            "priority": "1.0",
            "changefreq": "weekly"
        },
        {
            "name": "About",
            "path": "/about",
            "out_file": os.path.join(DIST_DIR, "about", "index.html"),
            "renderer": lambda: render_about_page(company_data, team_data),
            "priority": "0.9",
            "changefreq": "monthly"
        },
        {
            "name": "Services",
            "path": "/services",
            "out_file": os.path.join(DIST_DIR, "services", "index.html"),
            "renderer": lambda: render_services_page(company_data, services_data),
            "priority": "0.9",
            "changefreq": "monthly"
        },
        {
            "name": "Products",
            "path": "/products",
            "out_file": os.path.join(DIST_DIR, "products", "index.html"),
            "renderer": lambda: render_products_page(company_data, products_data),
            "priority": "0.9",
            "changefreq": "monthly"
        },
        {
            "name": "Engineering",
            "path": "/engineering",
            "out_file": os.path.join(DIST_DIR, "engineering", "index.html"),
            "renderer": lambda: render_engineering_page(company_data),
            "priority": "0.8",
            "changefreq": "monthly"
        },
        {
            "name": "Contact",
            "path": "/contact",
            "out_file": os.path.join(DIST_DIR, "contact", "index.html"),
            "renderer": lambda: render_contact_page(company_data),
            "priority": "0.8",
            "changefreq": "monthly"
        },
        {
            "name": "Legal",
            "path": "/legal",
            "out_file": os.path.join(DIST_DIR, "legal", "index.html"),
            "renderer": lambda: render_legal_page(company_data),
            "priority": "0.5",
            "changefreq": "yearly"
        },
    ]

    # 4. Compile Pages
    for route in routes:
        os.makedirs(os.path.dirname(route["out_file"]), exist_ok=True)
        html_content = route["renderer"]()
        with open(route["out_file"], "w", encoding="utf-8") as f:
            f.write(html_content)
        size_kb = os.path.getsize(route["out_file"]) / 1024
        print(f" [✓] Compiled route: {route['path']:<15} -> {os.path.relpath(route['out_file'], BASE_DIR)} ({size_kb:.1f} KB)")

    # 5. Copy Static Public Assets
    assets_src = os.path.join(PUBLIC_DIR, "assets")
    assets_dest = os.path.join(DIST_DIR, "assets")
    if os.path.exists(assets_src):
        shutil.copytree(assets_src, assets_dest, dirs_exist_ok=True)
        print(" [✓] Copied public/assets/ -> dist/assets/")

    # 6. Copy Root Cloudflare Configuration Files
    for filename in ["_headers", "_redirects", "robots.txt"]:
        src_path = os.path.join(PUBLIC_DIR, filename)
        if os.path.exists(src_path):
            shutil.copy2(src_path, os.path.join(DIST_DIR, filename))
            print(f" [✓] Copied {filename} -> dist/{filename}")

    # 7. Generate XML Sitemap
    sitemap_path = os.path.join(DIST_DIR, "sitemap.xml")
    generate_sitemap(routes, sitemap_path)
    print(f" [✓] Generated sitemap.xml with {len(routes)} canonical URLs.")

    elapsed = time.time() - start_time
    print("==================================================================")
    print(f" PRODUCTION BUILD COMPLETED SUCCESSFULLY IN {elapsed:.3f}s")
    print(f" Output Location: {DIST_DIR}")
    print(" Ready for Cloudflare Pages Free deployment or local preview.")
    print("==================================================================")

if __name__ == "__main__":
    build()
