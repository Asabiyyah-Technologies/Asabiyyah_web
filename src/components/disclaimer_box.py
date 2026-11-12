"""
Disclaimer Box Component
Renders standardized, accessible regulatory and status callouts.
"""

def render_disclaimer_box(disclaimer_type="regulatory", title=None, content=None):
    if disclaimer_type == "regulatory":
        t = title or "Important Regulatory Notice — Non-Custodial Software Layer"
        c = content or "Asabiyyah Technologies Ltd operates strictly as a technology engineering enterprise. Dila is a software infrastructure platform providing double-entry ledger automation and record-keeping for independent group organizers and registered cooperatives. Dila does NOT take custody of client deposits, issue loans, or operate as a bank. All financial transactions route directly through Central Bank of Nigeria (CBN)-licensed commercial banks and regulated payment service providers."
        return f"""
        <div class="rounded-xl border border-amber-300/80 bg-amber-50/70 p-5 text-amber-950 text-sm leading-relaxed" role="note" aria-label="Regulatory Notice">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <div>
              <div class="font-bold text-amber-900 mb-1">{t}</div>
              <p class="text-amber-800 text-xs sm:text-sm">{c}</p>
            </div>
          </div>
        </div>
        """
    elif disclaimer_type == "research":
        t = title or "Research & Development Prototype Status"
        c = content or "This initiative is currently an active applied research prototype. Features, benchmarks, and model architectures are demonstrated in controlled laboratory environments and do not yet constitute a commercial public SaaS offering."
        return f"""
        <div class="rounded-xl border border-sky-300/80 bg-sky-50/70 p-5 text-sky-950 text-sm leading-relaxed" role="note" aria-label="Research Status">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-sky-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <div class="font-bold text-sky-900 mb-1">{t}</div>
              <p class="text-sky-800 text-xs sm:text-sm">{c}</p>
            </div>
          </div>
        </div>
        """
    else:
        return f"""
        <div class="rounded-xl border border-slate-300 bg-slate-50 p-5 text-slate-800 text-sm leading-relaxed" role="note">
          <div class="font-bold text-slate-900 mb-1">{title or 'Notice'}</div>
          <p class="text-slate-700 text-xs sm:text-sm">{content}</p>
        </div>
        """
