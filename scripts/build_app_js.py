#!/usr/bin/env python3
"""
Generates the production React bundle (app.js) for Muhammad Auwal Aliyu's portfolio.
Self-contained, offline-first, zero runtime compilation overhead.
"""
import os
import sys
import json

# Ensure UTF-8
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_APP_JS = os.path.join(BASE_DIR, "public", "app.js")
DIST_APP_JS = os.path.join(BASE_DIR, "dist", "app.js")

# We will read portfolioData.ts or embed the structured data directly
print("Preparing to write app.js bundle...")
