"""
Service Card Component
Renders commercial practice cards for both overview grids and detailed service pages.
"""

def render_service_card(service, detailed=False):
    icons_svg = {
        "code": """<svg class="w-6 h-6 text-[#0D2B4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>""",
        "cpu": """<svg class="w-6 h-6 text-[#0D2B4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>""",
        "check-circle": """<svg class="w-6 h-6 text-[#0D2B4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>""",
        "database": """<svg class="w-6 h-6 text-[#0D2B4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>"""
    }
    
    icon_markup = icons_svg.get(service.get("icon"), icons_svg["code"])

    tech_pills = "".join([f'<span class="inline-block text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">{tech}</span>' for tech in service.get("technologies", [])])

    if not detailed:
        # Overview Card (Used on Home Page)
        return f"""
        <div class="flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 group">
          <div>
            <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              {icon_markup}
            </div>
            <h3 class="text-xl font-bold text-[#0A192F] mb-2 font-display">{service['title']}</h3>
            <p class="text-xs font-semibold text-[#C8960C] uppercase tracking-wider mb-3">{service['tagline']}</p>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">{service['description']}</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-5">
              {tech_pills}
            </div>
            <a href="/services#{service['slug']}" class="inline-flex items-center text-sm font-semibold text-[#0D2B4E] group-hover:text-blue-700 transition-colors">
              <span>View practice details</span>
              <svg class="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        """
    else:
        # Detailed Practice Block (Used on Services Page)
        problems_list = "".join([f'<li class="flex items-start gap-2.5 text-sm text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span><span>{p}</span></li>' for p in service.get("problems_solved", [])])
        deliverables_list = "".join([f'<li class="flex items-start gap-2.5 text-sm text-slate-700 font-medium"><svg class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg><span>{d}</span></li>' for d in service.get("deliverables", [])])
        clients_list = "".join([f'<li class="flex items-start gap-2 text-xs text-slate-600"><span class="text-[#C8960C] font-bold">›</span><span>{c}</span></li>' for c in service.get("ideal_clients", [])])

        return f"""
        <section id="{service['slug']}" class="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10 mb-10 transition-all hover:border-slate-300">
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  {icon_markup}
                </div>
                <div>
                  <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block">Commercial Practice</span>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display">{service['title']}</h2>
                </div>
              </div>
              <p class="text-base text-slate-600 font-medium max-w-2xl mt-2">{service['tagline']}</p>
              <p class="text-sm text-slate-600 mt-3 max-w-3xl leading-relaxed">{service['description']}</p>
            </div>
            <div class="shrink-0 flex items-center gap-3">
              <a href="/contact?practice={service['slug']}" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-lg shadow-sm transition-all">
                Engage This Practice
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            <!-- Problems Solved -->
            <div class="bg-rose-50/40 rounded-xl p-6 border border-rose-100/70">
              <h4 class="text-xs font-bold uppercase tracking-wider text-rose-900 mb-4 flex items-center gap-2">
                <svg class="w-4 h-4 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                Challenges Addressed
              </h4>
              <ul class="space-y-3">
                {problems_list}
              </ul>
            </div>

            <!-- Deliverables -->
            <div class="bg-emerald-50/40 rounded-xl p-6 border border-emerald-100/70">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-4 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                Engineered Deliverables
              </h4>
              <ul class="space-y-3">
                {deliverables_list}
              </ul>
            </div>

            <!-- Ideal Clients & Tech Stack -->
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  Target Client Profile
                </h4>
                <ul class="space-y-2 mb-6">
                  {clients_list}
                </ul>
              </div>
              <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Technology Stack</div>
                <div class="flex flex-wrap gap-1.5">
                  {tech_pills}
                </div>
              </div>
            </div>
          </div>
        </section>
        """
