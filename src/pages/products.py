"""
Products Page Generator
Renders the comprehensive products and initiatives portfolio for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer
from src.components.product_card import render_product_card

def render_products_page(company_data, products_data):
    # Product Cards
    products_html = "\n".join([render_product_card(p, featured=True) for p in products_data])

    head_html = render_head(
        title="Products & Initiatives Portfolio — Dila, AMANA SHIELD & ClassGPT-N",
        description="Explore Asabiyyah's technology portfolio: Dila community savings OS, AMANA SHIELD scam detection engine, and ClassGPT-N offline multilingual tutoring framework.",
        canonical_path="/products"
    )

    header_html = render_header(active_route="/products", company_data=company_data)
    footer_html = render_footer(company_data=company_data)

    return f"""<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
{head_html}
<body class="bg-white text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
  {header_html}

  <main id="main-content">
    <!-- PAGE HERO -->
    <section class="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4 border border-slate-200">
            <span>Portfolio &amp; R&amp;D</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#0A192F] font-display tracking-tight mb-6">
            Internal Technology &amp; Civic Initiatives
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Alongside our commercial client engineering, Asabiyyah develops internal platforms that address acute community challenges and push the boundaries of offline-first, multilingual digital infrastructure.
          </p>
        </div>

        <!-- Parent Identity Callout -->
        <div class="mt-8 bg-blue-50/60 border border-blue-200/80 rounded-2xl p-5 text-xs sm:text-sm text-blue-950 flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="font-bold text-[#0D2B4E]">Parent Corporate Relationship:</strong> Asabiyyah Technologies Ltd is the parent engineering and holding enterprise. Dila, AMANA SHIELD, and ClassGPT-N represent distinct internal products, civic projects, and research prototypes engineered by our systems team. The identity of Asabiyyah is not reduced to any single product.
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCT PORTFOLIO CONTAINER -->
    <section class="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products_html}

        <!-- Additional Internal R&D Callout: ResolveIQ -->
        <div class="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-4">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Tier 4: Internal R&amp;D Utility</span>
              <span class="text-slate-300">·</span>
              <span class="text-xs font-semibold text-slate-700">Internal Operational Tooling</span>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">Internal Tool</span>
          </div>
          <h4 class="text-lg font-bold text-[#0A192F] font-display mb-1">ResolveIQ — Incident &amp; Workflow Intelligence</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            An internal operational knowledge-base and customer support resolution engine developed to streamline troubleshooting for field deployments of Dila and AMANA SHIELD. Currently utilized strictly within Asabiyyah internal engineering operations.
          </p>
          <div class="text-[11px] font-mono text-slate-500">
            Status: Internal Operations Only (Non-Public)
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BANNER -->
    <section class="py-16 bg-[#0A192F] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl sm:text-3xl font-extrabold font-display mb-4">Interested in Pilot Participation or Research Collaboration?</h3>
        <p class="text-slate-300 text-sm max-w-xl mx-auto mb-8">
          Whether you are a cooperative organizer interested in Dila, a civic institution evaluating AMANA SHIELD, or an academic researcher, our team welcomes collaboration.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact?type=dila-pilot" class="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-[#0A192F] bg-white hover:bg-slate-100 rounded-xl transition-all shadow">
            Request Dila Pilot Access
          </a>
          <a href="/contact?type=civic" class="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all">
            Inquire About Civic Intelligence
          </a>
        </div>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
