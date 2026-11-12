"""
SEO & Head Metadata Component
Generates optimized meta tags, Open Graph, Twitter cards, and Schema.org JSON-LD.
"""
import json

def render_head(title="Building Technology That Matters", description="", canonical_path="/", json_ld=None):
    base_url = "https://www.asabiyyah.com"
    full_url = f"{base_url}{canonical_path}" if canonical_path != "/" else base_url
    full_title = f"{title} | Asabiyyah Technologies Ltd" if title != "Asabiyyah Technologies Ltd" else title
    og_image = f"{base_url}/assets/brand/og-asabiyyah.png"

    default_json_ld = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Asabiyyah Technologies Ltd",
        "alternateName": "Asabiyyah",
        "url": base_url,
        "logo": f"{base_url}/assets/brand/asabiyyah-logo-master.png",
        "description": "African technology company engineering high-integrity software, intelligent systems, and resilient digital infrastructure.",
        "foundingDate": "2026-10-07",
        "identifier": "RC 9918400",
        "taxID": "2621713612761",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2, Kunya - B Mutum Road",
            "addressLocality": "Babura Town",
            "addressRegion": "Jigawa State",
            "postalCode": "732104",
            "addressCountry": "NG"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+2348064753943",
            "contactType": "corporate correspondence",
            "email": "info@asabiyyah.com",
            "areaServed": ["NG", "Africa"],
            "availableLanguage": ["English", "Hausa"]
        }
    }

    active_json_ld = json_ld if json_ld else default_json_ld
    json_ld_string = json.dumps(active_json_ld, indent=2)

    return f"""<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{full_title}</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="{full_url}">

  <!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="{full_url}">
  <meta property="og:title" content="{full_title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="{og_image}">
  <meta property="og:site_name" content="Asabiyyah Technologies Ltd">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="{full_url}">
  <meta name="twitter:title" content="{full_title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="{og_image}">

  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="/assets/brand/asabiyyah-mark.svg">
  <link rel="apple-touch-icon" href="/assets/brand/asabiyyah-logo-master.png">

  <!-- Typography: Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS Engine -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          colors: {{
            asbNavy: {{
              950: '#071324',
              900: '#0A192F',
              800: '#0D2B4E',
              700: '#1B2A4A',
              600: '#2C3E5F',
            }},
            asbGold: {{
              900: '#78350F',
              700: '#B45309',
              600: '#C8960C',
              500: '#C8A951',
              400: '#D4B96A',
              100: '#FEF3C7',
              50: '#FFFBEB',
            }},
          }},
          fontFamily: {{
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            display: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }},
        }}
      }}
    }}
  </script>

  <style>
    :root {{
      --asb-navy: #0D2B4E;
      --asb-navy-dark: #0A192F;
      --asb-gold: #C8960C;
    }}
    body {{
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #0F172A;
      background-color: #FFFFFF;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }}
    .font-display {{
      font-family: 'Plus Jakarta Sans', sans-serif;
    }}
    .font-mono {{
      font-family: 'JetBrains Mono', monospace;
    }}
    /* Custom scrollbars */
    ::-webkit-scrollbar {{
      width: 8px;
      height: 8px;
    }}
    ::-webkit-scrollbar-track {{
      background: #F1F5F9;
    }}
    ::-webkit-scrollbar-thumb {{
      background: #CBD5E1;
      border-radius: 4px;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: #94A3B8;
    }}
  </style>

  <!-- Schema.org JSON-LD Structured Data -->
  <script type="application/ld+json">
{json_ld_string}
  </script>
</head>"""
