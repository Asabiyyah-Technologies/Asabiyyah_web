"""
Verification test script for compiled dist artifacts.
Checks HTML structure, internal link integrity, and asset presence.
"""
import os
import re
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(BASE_DIR, "dist")

def verify():
    html_files = []
    for root, dirs, files in os.walk(DIST_DIR):
        for f in files:
            if f.endswith(".html"):
                html_files.append(os.path.join(root, f))

    print(f"Testing {len(html_files)} compiled HTML files in {DIST_DIR}...")
    errors = 0

    valid_routes = [
        "/", "/about", "/services", "/products", "/engineering", "/contact", "/legal",
        "/about#leadership", "/about#legal",
        "/services#custom-software", "/services#applied-ai", "/services#process-automation", "/services#digital-infrastructure",
        "/products#dila", "/products#amana-shield", "/products#classgpt-n",
        "/engineering#offline-first", "/engineering#amana-shield", "/engineering#double-entry",
        "/legal#corporate", "/legal#regulatory", "/legal#privacy", "/legal#terms", "/legal#ip"
    ]

    for hf in html_files:
        rel_hf = os.path.relpath(hf, BASE_DIR)
        with open(hf, "r", encoding="utf-8") as f:
            content = f.read()

        if "<!DOCTYPE html>" not in content or "</html>" not in content:
            print(f" [X] {rel_hf}: Malformed HTML document structure.")
            errors += 1

        # Check asset references
        assets = re.findall(r'src="(/assets/[^"]+)"', content) + re.findall(r'href="(/assets/[^"]+)"', content)
        for a in assets:
            disk_path = os.path.join(DIST_DIR, a.lstrip("/"))
            if not os.path.exists(disk_path):
                print(f" [X] {rel_hf}: Missing referenced asset '{a}'")
                errors += 1

        # Check internal routing links
        internal_links = re.findall(r'href="(/[^"#?]+(?:#[^"]+)?(?:\?[^"]+)?)"', content)
        for link in internal_links:
            # strip query params for route validation
            route_base = link.split("?")[0].split("#")[0]
            if route_base == "":
                route_base = "/"
            if route_base not in ["/", "/about", "/services", "/products", "/engineering", "/contact", "/legal"]:
                if not route_base.startswith("/assets/"):
                    print(f" [X] {rel_hf}: Unrecognized internal link '{link}'")
                    errors += 1

    if errors == 0:
        print(f" [✓] SUCCESS: All {len(html_files)} HTML files verified! Zero broken assets or internal links.")
        return 0
    else:
        print(f" [X] FAILURE: {errors} issues detected during build verification.")
        return 1

if __name__ == "__main__":
    sys.exit(verify())
