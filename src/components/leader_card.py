"""
Leadership Card Component
Renders executive profiles with verified statutory status, credentials, and technical domains.
"""

def render_leader_card(leader):
    credentials_list = "".join([
        f'<li class="flex items-start gap-2 text-xs text-slate-700 font-medium"><svg class="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg><span>{c}</span></li>'
        for c in leader.get("credentials", [])
    ])

    links_html = []
    if leader.get("links", {}).get("github"):
        links_html.append(f'<a href="{leader["links"]["github"]}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1 font-mono"><span>GitHub</span><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>')
    if leader.get("links", {}).get("linkedin"):
        links_html.append(f'<a href="{leader["links"]["linkedin"]}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1 font-mono"><span>LinkedIn</span><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>')
    
    links_row = " · ".join(links_html) if links_html else '<span class="text-xs text-slate-400 font-mono">Corporate Verified Profile</span>'

    return f"""
    <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all">
      <div>
        <!-- Profile Header -->
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#1B2A4A] text-white flex items-center justify-center font-display font-extrabold text-xl tracking-wider shadow-inner border border-amber-400/40 shrink-0">
            {leader['monogram']}
          </div>
          <div>
            <h3 class="text-xl font-extrabold text-[#0A192F] font-display">{leader['name']}</h3>
            <div class="text-xs font-semibold text-[#C8960C] mt-0.5">{leader['role']}</div>
            <div class="inline-block mt-1.5 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              {leader['statutory_title']} ({leader['equity_share']} Equity)
            </div>
          </div>
        </div>

        <!-- Bio Summary -->
        <p class="text-sm text-slate-600 leading-relaxed mb-6">
          {leader['summary']}
        </p>

        <!-- Credentials -->
        <div class="mb-6">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Verified Academic &amp; Professional Record</div>
          <ul class="space-y-2 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
            {credentials_list}
          </ul>
        </div>
      </div>

      <!-- Technical Domains & Verified Links -->
      <div class="pt-6 border-t border-slate-100">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Engineering &amp; Operational Focus</div>
        <div class="text-xs text-slate-600 font-mono mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 leading-normal">
          {leader['technical_expertise']}
        </div>
        <div class="flex items-center justify-between pt-2">
          <div class="flex items-center gap-3">
            {links_row}
          </div>
          <span class="text-[10px] text-slate-400 font-mono">FIRS &amp; CAC Audited</span>
        </div>
      </div>
    </div>
    """
