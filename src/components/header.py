"""
Header Component
Renders the fixed top navigation bar and accessible mobile drawer.
"""

def render_header(active_route="/", company_data=None):
    routes = [
        {"name": "About", "href": "/about"},
        {"name": "Services", "href": "/services"},
        {"name": "Products", "href": "/products"},
        {"name": "Engineering", "href": "/engineering"},
        {"name": "Contact", "href": "/contact"},
    ]

    desktop_links = []
    mobile_links = []

    for r in routes:
        is_active = (active_route == r["href"])
        active_class = "text-[#0D2B4E] font-bold border-b-2 border-[#C8960C] pb-1" if is_active else "text-slate-700 hover:text-[#0D2B4E] font-medium"
        desktop_links.append(f'<a href="{r["href"]}" class="text-sm transition-colors duration-150 {active_class}">{r["name"]}</a>')
        
        mobile_active = "text-[#0D2B4E] font-bold bg-amber-50/60 border-l-4 border-[#C8960C] pl-3" if is_active else "text-slate-800 hover:text-[#0D2B4E] pl-4"
        mobile_links.append(f'<a href="{r["href"]}" class="py-3 text-lg transition-colors {mobile_active}">{r["name"]}</a>')

    desktop_nav_html = "\n".join(desktop_links)
    mobile_nav_html = "\n".join(mobile_links)

    return f"""
    <!-- Global Sticky Header -->
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Brandmark -->
        <a href="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1" aria-label="Asabiyyah Technologies Ltd Home">
          <svg class="w-10 h-10 transition-transform duration-200 group-hover:scale-105 shrink-0" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0A192F"/>
                <stop offset="50%" stop-color="#0D2B4E"/>
                <stop offset="100%" stop-color="#2563EB"/>
              </linearGradient>
              <linearGradient id="headerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#C8960C"/>
                <stop offset="100%" stop-color="#EAB308"/>
              </linearGradient>
            </defs>
            <path d="M50 6 C25.7 6 6 25.7 6 50 C6 74.3 25.7 94 50 94 C68.5 94 84.4 82.5 90.8 66 C82.5 76.5 69.5 83.2 55 83.2 C36.6 83.2 21.8 68.4 21.8 50 C21.8 31.6 36.6 16.8 55 16.8 C62.3 16.8 69.1 19.2 74.6 23.2 C67.5 12.6 59.5 6 50 6 Z" fill="url(#headerGrad)"/>
            <path d="M54 22 C40.2 22 29 33.2 29 47 C29 60.8 40.2 72 54 72 C63.5 72 71.7 66.7 75.8 58.9 C70.2 62.8 63.4 65.1 56 65.1 C44.4 65.1 35 55.7 35 44.1 C35 32.5 44.4 23.1 56 23.1 C61.2 23.1 66 25 69.8 28.2 C65.2 24.3 60 22 54 22 Z" fill="url(#headerGrad)" opacity="0.85"/>
            <path d="M56 32 C47.7 32 41 38.7 41 47 C41 55.3 47.7 62 56 62 C61.8 62 66.8 58.7 69.3 53.9 C65.9 56.3 61.7 57.7 57.2 57.7 C50.2 57.7 44.5 52 44.5 45 C44.5 38 50.2 32.3 57.2 32.3 C60.4 32.3 63.3 33.5 65.6 35.5 C62.8 33.3 59.6 32 56 32 Z" fill="url(#headerGold)"/>
          </svg>
          <div class="flex flex-col">
            <span class="font-extrabold text-lg tracking-wider text-[#0A192F] leading-tight font-display">ASABIYYAH</span>
            <span class="text-[10px] tracking-widest font-bold text-[#C8960C] uppercase">Technologies Ltd</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {desktop_nav_html}
        </nav>

        <!-- Primary Conversion CTA -->
        <div class="hidden md:flex items-center gap-4">
          <a href="/contact" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-lg shadow-sm hover:shadow transition-all border border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Start a Conversation
          </a>
        </div>

        <!-- Mobile Drawer Trigger -->
        <div class="md:hidden flex items-center">
          <button type="button" onclick="toggleMobileMenu()" class="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Toggle navigation menu" id="mobile-menu-btn" aria-expanded="false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu" class="hidden fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="toggleMobileMenu()">
        <div class="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto" onclick="event.stopPropagation()">
          <div>
            <div class="flex items-center justify-between pb-6 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-base tracking-wider text-[#0A192F]">ASABIYYAH</span>
                <span class="text-[10px] font-bold text-[#C8960C] uppercase tracking-wider">TECH</span>
              </div>
              <button type="button" onclick="toggleMobileMenu()" class="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Close menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <nav class="flex flex-col pt-6 space-y-1">
              {mobile_nav_html}
            </nav>
          </div>
          <div class="pt-6 border-t border-slate-200">
            <a href="/contact" class="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-xl shadow-sm text-center">
              Start a Conversation
            </a>
            <div class="mt-4 text-center text-xs text-slate-500">
              RC 9918400 · Jigawa, Nigeria
            </div>
          </div>
        </div>
      </div>
    </header>
    <script>
      function toggleMobileMenu() {{
        const menu = document.getElementById('mobile-menu');
        const btn = document.getElementById('mobile-menu-btn');
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {{
          menu.classList.remove('hidden');
          btn.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        }} else {{
          menu.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }}
      }}
      document.addEventListener('keydown', function(e) {{
        if (e.key === 'Escape') {{
          const menu = document.getElementById('mobile-menu');
          if (!menu.classList.contains('hidden')) {{
            toggleMobileMenu();
          }}
        }}
      }});
    </script>
    """
