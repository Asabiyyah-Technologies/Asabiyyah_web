# SEARCH ENGINE OPTIMIZATION (SEO) & METADATA AUDIT
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 5: QA, Security & Production Deployment |
| **Audit Date** | November 12, 2026 |
| **Auditor** | Technical SEO & Information Architecture Lead |
| **Indexability Status** | **100% Crawlable & Machine-Readable (Zero SEO Blocker)** |

---

## 1. Executive Summary

This SEO audit evaluates the technical search engine optimization, machine readability, social sharing metadata, and structured data implementation across all seven canonical pages of the Asabiyyah Technologies Ltd corporate website.

---

## 2. On-Page SEO & Metadata Inventory

| Page Route | Page Title (`<title>`) | Meta Description Length | Canonical URL | Schema.org Type |
| :--- | :--- | :---: | :--- | :--- |
| `/` (Home) | `Building Technology That Matters \| Asabiyyah Technologies Ltd` | 162 chars | `https://www.asabiyyah.com/` | `Corporation` |
| `/about/` | `About Us — Corporate Governance, Leadership & Philosophy \| Asabiyyah Technologies Ltd` | 154 chars | `https://www.asabiyyah.com/about` | `Corporation` |
| `/services/` | `Commercial Services & Engineering Practices \| Asabiyyah Technologies Ltd` | 156 chars | `https://www.asabiyyah.com/services` | `Corporation` |
| `/products/` | `Products & Initiatives Portfolio — Dila, AMANA SHIELD & ClassGPT-N \| Asabiyyah Technologies Ltd` | 148 chars | `https://www.asabiyyah.com/products` | `Corporation` |
| `/engineering/`| `Engineering Architecture & System Specifications \| Asabiyyah Technologies Ltd` | 152 chars | `https://www.asabiyyah.com/engineering` | `Corporation` |
| `/contact/` | `Contact Us — Corporate Desk & Project Inquiries \| Asabiyyah Technologies Ltd` | 150 chars | `https://www.asabiyyah.com/contact` | `Corporation` |
| `/legal/` | `Legal Disclosures, NDPR Privacy & Disclaimers \| Asabiyyah Technologies Ltd` | 157 chars | `https://www.asabiyyah.com/legal` | `Corporation` |

---

## 3. Structured Data Audit (Schema.org JSON-LD)

Every page embeds a syntactically valid JSON-LD graph defining Asabiyyah Technologies Ltd as an enterprise Corporation:

```json
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Asabiyyah Technologies Ltd",
  "alternateName": "Asabiyyah",
  "url": "https://www.asabiyyah.com",
  "logo": "https://www.asabiyyah.com/assets/brand/asabiyyah-logo-master.png",
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
```

*Verification:* Validated using Python's `json.loads()` across all compiled pages with zero syntax errors. Ensures Google Knowledge Graph eligibility and rich search snippet generation.

---

## 4. Social Graph Metadata (OpenGraph & Twitter Cards)

- **Open Graph (Facebook, LinkedIn, WhatsApp, Slack):**
  - `og:site_name`: `Asabiyyah Technologies Ltd`
  - `og:type`: `website`
  - `og:title`: Tailored to each route.
  - `og:description`: Matches verified meta description.
  - `og:image`: High-resolution vector/branded social card (`/assets/brand/og-asabiyyah.png`).
- **Twitter Cards:**
  - `twitter:card`: `summary_large_image`
  - `twitter:title`, `twitter:description`, `twitter:image` fully synchronized.

---

## 5. Crawler Directives & Indexing Files

### 5.1 `robots.txt` (`dist/robots.txt`)
```text
User-agent: *
Allow: /
Disallow: /functions/
Disallow: /api/

Sitemap: https://www.asabiyyah.com/sitemap.xml
```

### 5.2 `sitemap.xml` (`dist/sitemap.xml`)
- Contains all 7 canonical URLs.
- Features ISO date stamps (`2026-11-12`).
- Declares change frequencies (`weekly` for Home, `monthly` for Services/Products/Engineering/About/Contact, `yearly` for Legal).
- Defines relative priority weights (1.0 for Home, 0.9 for Services/Products/About, 0.8 for Engineering/Contact, 0.5 for Legal).

---

## 6. Internal Linking & Crawl Depth

- **Maximum Crawl Depth:** 1 click from root (all routes accessible via global navigation header and footer).
- **Orphan Pages:** 0 (Zero orphan pages detected).
- **Descriptive Anchor Text:** Links utilize contextual text ("Explore Commercial Practices", "View full practice specifications") rather than generic "click here".

---

## 7. SEO Signoff

The website adheres to modern technical SEO best practices, guaranteeing indexability, social share richness, and corporate entity grounding across search engines.
