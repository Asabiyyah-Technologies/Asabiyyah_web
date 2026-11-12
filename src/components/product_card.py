"""
Product Card Component
Renders product presentations with appropriate status tiers and regulatory disclaimers.
"""
from src.components.disclaimer_box import render_disclaimer_box

def render_product_card(product, featured=False):
    status_colors = {
        "amber": {
            "badge": "bg-amber-100 text-amber-900 border-amber-300",
            "dot": "bg-amber-500",
            "border": "border-amber-200"
        },
        "emerald": {
            "badge": "bg-emerald-100 text-emerald-900 border-emerald-300",
            "dot": "bg-emerald-500",
            "border": "border-emerald-200"
        },
        "sky": {
            "badge": "bg-sky-100 text-sky-900 border-sky-300",
            "dot": "bg-sky-500",
            "border": "border-sky-200"
        }
    }
    
    palette = status_colors.get(product.get("status_color", "amber"), status_colors["amber"])

    features_html = "".join([
        f"""
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div class="text-sm font-bold text-[#0A192F] mb-1">{f['title']}</div>
          <div class="text-xs text-slate-600 leading-relaxed">{f['description']}</div>
        </div>
        """ for f in product.get("key_features", [])
    ])

    disclaimer_html = ""
    if product.get("regulatory_disclaimer"):
        disclaimer_html = f"""
        <div class="mt-6">
          {render_disclaimer_box("regulatory", "Regulatory Position — Pure Software Infrastructure", product['regulatory_disclaimer'])}
        </div>
        """
    elif product.get("id") == "classgpt-n":
        disclaimer_html = f"""
        <div class="mt-6">
          {render_disclaimer_box("research", "Academic & Field Research Prototype", "ClassGPT-N is actively evaluated in laboratory and offline testbeds. We demonstrate technical feasibility of edge quantization and local Hausa NLP before any mass institutional deployment.")}
        </div>
        """

    logo_display = ""
    if product.get("logo_asset") and product.get("id") == "dila":
        logo_display = f"""
        <div class="flex items-center gap-3 mb-4">
          <img src="{product['logo_asset']}" alt="{product['name']} Logo" class="h-9 w-auto">
        </div>
        """
    elif product.get("id") == "amana-shield":
        logo_display = f"""
        <div class="flex items-center gap-2 mb-4">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 font-mono font-bold text-sm">AS</span>
          <span class="font-extrabold text-xl text-[#0A192F] tracking-tight font-display">AMANA SHIELD</span>
        </div>
        """
    elif product.get("id") == "classgpt-n":
        logo_display = f"""
        <div class="flex items-center gap-2 mb-4">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-sky-950 text-sky-400 font-mono font-bold text-sm">CG</span>
          <span class="font-extrabold text-xl text-[#0A192F] tracking-tight font-display">ClassGPT-N</span>
        </div>
        """

    return f"""
    <article id="{product['slug']}" class="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10 mb-12 hover:shadow-md transition-shadow">
      <!-- Header Meta -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500">{product['tier']}</span>
          <span class="text-slate-300">·</span>
          <span class="text-xs font-semibold text-[#C8960C]">{product['category_badge']}</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border {palette['badge']}">
          <span class="w-2 h-2 rounded-full {palette['dot']}"></span>
          <span>{product['status']}</span>
        </div>
      </div>

      <!-- Core Title & Subhead -->
      <div class="pt-6">
        {logo_display}
        <h3 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-2">{product['full_title']}</h3>
        <p class="text-base font-semibold text-[#0D2B4E] max-w-2xl mb-4">{product['tagline']}</p>
        <p class="text-sm text-slate-600 leading-relaxed max-w-4xl mb-6">{product['description']}</p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {features_html}
      </div>

      <!-- Target Audience -->
      <div class="bg-slate-50 rounded-xl p-4 border border-slate-200/70 text-xs text-slate-600 flex items-start gap-2.5">
        <span class="font-bold text-slate-800 uppercase tracking-wider shrink-0">Primary Audience:</span>
        <span>{product['target_audience']}</span>
      </div>

      <!-- Disclaimer (if applicable) -->
      {disclaimer_html}

      <!-- Bottom Action -->
      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div class="text-xs text-slate-500">
          Maintained by Asabiyyah Technologies Ltd Systems Engineering Desk
        </div>
        <a href="{product['cta_link']}" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600">
          <span>{product['cta_text']}</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </article>
    """
