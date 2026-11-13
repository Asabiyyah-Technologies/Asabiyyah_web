#!/usr/bin/env python3
"""
Muhammad Auwal Aliyu (Abu Mus'ab) — Portfolio Generator & Compiler
Generates the world-class, offline-first personal portfolio website.
"""
import os
import sys
import shutil
import json

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(BASE_DIR, "dist")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
ASSETS_DIR = os.path.join(PUBLIC_DIR, "assets")

def generate_html():
    return '''<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Muhammad Auwal Aliyu (Abu Mus'ab) — Full-Stack AI Engineer & Technology Founder</title>
  <meta name="title" content="Muhammad Auwal Aliyu (Abu Mus'ab) — Full-Stack AI Engineer & Technology Founder" />
  <meta name="description" content="Portfolio of Muhammad Auwal Aliyu (Abu Mus'ab) — Full-Stack AI Engineer, Technology Founder & Educator based in Jos, Nigeria. Engineering intelligent systems. Building technology that matters beyond ideal conditions." />
  <meta name="keywords" content="Muhammad Auwal Aliyu, Abu Mus'ab, AI Engineer Nigeria, Full-Stack AI Engineer, Agentic AI, Quantised LLMs, Offline-First Architecture, Multilingual RAG, Hausa NLP, Asabiyyah Technologies, ClassGPT, ResolveIQ, Amana Shield, Dila, FUTB Computer Science" />
  <meta name="author" content="Muhammad Auwal Aliyu (Abu Mus'ab)" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://abumusab.dev/" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://abumusab.dev/" />
  <meta property="og:title" content="Muhammad Auwal Aliyu (Abu Mus'ab) — Full-Stack AI Engineer & Technology Founder" />
  <meta property="og:description" content="Engineering intelligent systems. Building technology that matters beyond ideal conditions. Full-Stack AI Engineer, Founder of Asabiyyah Technologies Ltd, First Class CS FUTB (CGPA 4.79/5.00)." />
  <meta property="og:image" content="https://abumusab.dev/assets/brand/asabiyyah-logo-master.png" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://abumusab.dev/" />
  <meta name="twitter:site" content="@M_A_Aliyu" />
  <meta name="twitter:creator" content="@M_A_Aliyu" />
  <meta name="twitter:title" content="Muhammad Auwal Aliyu (Abu Mus'ab) — Full-Stack AI Engineer & Technology Founder" />
  <meta name="twitter:description" content="Engineering intelligent systems. Building technology that matters beyond ideal conditions. Specializing in Applied AI, Agentic Workflows, and Offline-First Multilingual Architectures." />
  <meta name="twitter:image" content="https://abumusab.dev/assets/brand/asabiyyah-logo-master.png" />

  <!-- Favicons & Manifest -->
  <link rel="icon" type="image/svg+xml" href="/assets/brand/dila-symbol.svg" />
  <link rel="apple-touch-icon" href="/assets/brand/asabiyyah-logo-master.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#0F172A" />

  <!-- Schema.org Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://abumusab.dev/#person",
        "name": "Muhammad Auwal Aliyu",
        "alternateName": "Abu Mus'ab",
        "jobTitle": "Full-Stack AI Engineer & Technology Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "Asabiyyah Technologies Ltd",
          "url": "https://www.asabiyyah.com"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Federal University of Technology, Babura (FUTB)",
          "location": "Babura, Jigawa State, Nigeria"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jos",
          "addressRegion": "Plateau State",
          "addressCountry": "Nigeria"
        },
        "email": "aliyumuhammadauwal92@gmail.com",
        "sameAs": [
          "https://www.linkedin.com/in/muhammad-auwal-aliyu-74a6ab208",
          "https://github.com/MaAbumusAb",
          "https://x.com/M_A_Aliyu",
          "https://www.facebook.com/share/1CJXB7VaFA/",
          "https://www.tiktok.com/@abu_mus_ab?_r=1&_t=ZS-9BNXy2tko8Q",
          "https://www.instagram.com/abu_mus_ab._?psln=MWxtbXFpaGxrYjEydA=="
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Large Language Models",
          "Multi-Agent Systems",
          "Edge AI",
          "Offline-First Software Architecture",
          "Retrieval-Augmented Generation (RAG)",
          "Multilingual Hausa NLP",
          "Double-Entry Ledger Systems",
          "FastAPI",
          "React",
          "Python"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://abumusab.dev/#webpage",
        "url": "https://abumusab.dev/",
        "name": "Muhammad Auwal Aliyu (Abu Mus'ab) — Portfolio",
        "about": { "@id": "https://abumusab.dev/#person" }
      }
    ]
  }
  </script>

  <!-- Typography: Inter Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Local Offline-First Vendor Scripts -->
  <script src="/assets/vendor/tailwind.min.js"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          },
          colors: {
            canvas: '#FAFAFB',
            surface: '#FFFFFF',
            ink: {
              primary: '#0F172A',
              secondary: '#334155',
              muted: '#64748B',
              faint: '#94A3B8'
            },
            accent: {
              blue: '#2563EB',
              blueDark: '#1D4ED8',
              blueLight: '#EFF6FF',
              emerald: '#059669',
              emeraldLight: '#ECFDF5',
              amber: '#D97706',
              amberLight: '#FFFBEB'
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Refined Custom Styling & Micro-interactions */
    body {
      background-color: #FAFAFB;
      color: #0F172A;
      font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    }
    
    /* Technical Grid Accents */
    .tech-grid-pattern {
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, rgba(226, 232, 240, 0.45) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(226, 232, 240, 0.45) 1px, transparent 1px);
    }

    .tech-dots-pattern {
      background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
      background-size: 20px 20px;
    }

    /* Custom subtle scrollbar */
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    ::-webkit-scrollbar-track {
      background: #F1F5F9;
    }
    ::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94A3B8;
    }

    /* Print Styles */
    @media print {
      header, footer, .no-print, button {
        display: none !important;
      }
      body {
        background: white !important;
        color: black !important;
      }
    }
  </style>

  <!-- React 18 / 19 Standalone -->
  <script src="/assets/vendor/react.production.min.js"></script>
  <script src="/assets/vendor/react-dom.production.min.js"></script>
</head>
<body class="selection:bg-blue-100 selection:text-blue-900 antialiased overflow-x-hidden">

  <!-- Service Worker Registration for Offline Capability -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('[ServiceWorker] Registered with scope:', reg.scope))
          .catch(err => console.warn('[ServiceWorker] Registration failed:', err));
      });
    }
  </script>

  <!-- Mount Root for React Application -->
  <div id="root">
    <!-- Progressive Fallback Skeleton while JS initializes -->
    <div class="min-h-screen flex items-center justify-center bg-[#FAFAFB]">
      <div class="text-center p-8 max-w-md">
        <div class="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h1 class="text-xl font-bold text-slate-900 tracking-tight">Muhammad Auwal Aliyu</h1>
        <p class="text-sm text-slate-500 mt-1">Abu Mus'ab · Full-Stack AI Engineer</p>
        <p class="text-xs text-slate-400 mt-3 font-mono">Initializing portfolio systems...</p>
      </div>
    </div>
  </div>

  <!-- Main React Bundle -->
  <script src="/app.js"></script>
</body>
</html>
'''

def main():
    print("==================================================================")
    print(" MUHAMMAD AUWAL ALIYU (ABU MUS'AB) — PORTFOLIO COMPILER")
    print(" Building production static site for web & offline deployment...")
    print("==================================================================")

    # Clean & ensure dist directories
    os.makedirs(DIST_DIR, exist_ok=True)
    os.makedirs(PUBLIC_DIR, exist_ok=True)

    # 1. Generate index.html in public/ and dist/
    html_content = generate_html()
    public_index = os.path.join(PUBLIC_DIR, "index.html")
    dist_index = os.path.join(DIST_DIR, "index.html")

    with open(public_index, "w", encoding="utf-8") as f:
        f.write(html_content)
    with open(dist_index, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f" [✓] Wrote index.html to public/ ({len(html_content)} bytes)")
    print(f" [✓] Wrote index.html to dist/ ({len(html_content)} bytes)")

    # 2. Copy static assets to dist/
    dist_assets = os.path.join(DIST_DIR, "assets")
    if os.path.exists(ASSETS_DIR):
        shutil.copytree(ASSETS_DIR, dist_assets, dirs_exist_ok=True)
        print(" [✓] Copied public/assets/ -> dist/assets/")

    for root_file in ["manifest.json", "robots.txt", "sitemap.xml", "sw.js"]:
        src_path = os.path.join(PUBLIC_DIR, root_file)
        if os.path.exists(src_path):
            shutil.copy2(src_path, os.path.join(DIST_DIR, root_file))
            print(f" [✓] Copied {root_file} -> dist/{root_file}")

    print("==================================================================")
    print(" BASE SKELETON COMPILATION COMPLETE")
    print(" Ready to generate /app.js React bundle.")
    print("==================================================================")

if __name__ == "__main__":
    main()
