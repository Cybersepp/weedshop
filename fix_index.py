import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

original = content

# 1. Replace var(--topweed) with var(--green-lime) everywhere
content = content.replace('var(--topweed)', 'var(--green-lime)')

# 2. Fix 600px breakpoint showcase-features
content = content.replace(
    '.showcase-features { grid-template-columns: 1fr 1fr; }\n      .hero-ctas',
    '.showcase-features { grid-template-columns: 1fr; }\n      .hero-ctas'
)

# 3. Remove redundant font-family from child elements (body already inherits Arial)
removals = [
    # nav-order-btn
    (
        '      transition: all 0.24s;\n      white-space: nowrap;\n      font-family: Arial, sans-serif;\n    }\n    .nav-order-btn:hover',
        '      transition: all 0.24s;\n      white-space: nowrap;\n    }\n    .nav-order-btn:hover'
    ),
    # lang-trigger
    (
        '      cursor: pointer;\n      font-family: Arial, sans-serif;\n      transition: border-color 0.2s, color 0.2s;',
        '      cursor: pointer;\n      transition: border-color 0.2s, color 0.2s;'
    ),
    # lang-option
    (
        '      font-size: 10px;\n      font-weight: 700;\n      letter-spacing: 0.08em;\n      font-family: Arial, sans-serif;\n      cursor: pointer;\n      border-radius: 4px;',
        '      font-size: 10px;\n      font-weight: 700;\n      letter-spacing: 0.08em;\n      cursor: pointer;\n      border-radius: 4px;'
    ),
    # btn-primary
    (
        '      transition: all 0.22s;\n      font-family: Arial, sans-serif;\n    }\n\n    .btn-primary:hover',
        '      transition: all 0.22s;\n    }\n\n    .btn-primary:hover'
    ),
    # showcase-feature-label
    (
        '      margin-bottom: 18px;\n      font-family: Arial, sans-serif;\n    }\n\n    .sf-gold .showcase-feature-label',
        '      margin-bottom: 18px;\n    }\n\n    .sf-gold .showcase-feature-label'
    ),
    # showcase-feature-desc
    (
        '      line-height: 1.7;\n      font-family: Arial, sans-serif;\n    }\n\n    .section-header',
        '      line-height: 1.7;\n    }\n\n    .section-header'
    ),
    # card-category
    (
        '      margin-bottom: 14px;\n      font-family: Arial, sans-serif;\n    }\n\n    .card-category.tropicana',
        '      margin-bottom: 14px;\n    }\n\n    .card-category.tropicana'
    ),
    # stat-pill
    (
        '      border: 1px solid;\n      font-family: Arial, sans-serif;\n    }\n\n    .stat-pill.tropicana',
        '      border: 1px solid;\n    }\n\n    .stat-pill.tropicana'
    ),
    # lab-tag
    (
        '      display: inline-block;\n      font-family: Arial, sans-serif;\n    }\n\n    /* -- FIND US',
        '      display: inline-block;\n    }\n\n    /* -- FIND US'
    ),
    # btn-instagram, btn-telegram
    (
        '      transition: all 0.24s;\n      font-family: Arial, sans-serif;\n    }\n\n    .btn-instagram {',
        '      transition: all 0.24s;\n    }\n\n    .btn-instagram {'
    ),
    # footer-badge
    (
        '      border-radius: 2px;\n      font-family: Arial, sans-serif;\n    }\n\n    .footer-socials',
        '      border-radius: 2px;\n    }\n\n    .footer-socials'
    ),
    # nav-mobile-order-btn inside media query
    (
        '        font-family: Arial, sans-serif;\n        transition: background 0.24s, border-color 0.24s, box-shadow 0.24s;',
        '        transition: background 0.24s, border-color 0.24s, box-shadow 0.24s;'
    ),
]

for old, new in removals:
    if old in content:
        content = content.replace(old, new)
    else:
        print(f'WARNING: pattern not found: {repr(old[:60])}')

# 4. HTML: Fix nav links (add href for keyboard accessibility)
content = content.replace(
    "<li><a onclick=\"navScroll('our-story')\" data-i18n=\"nav_experience\">EXPERIENCE</a></li>",
    "<li><a href=\"#our-story\" onclick=\"event.preventDefault(); navScroll('our-story')\" data-i18n=\"nav_experience\">EXPERIENCE</a></li>"
)
content = content.replace(
    "<li><a onclick=\"navScroll('findus')\" data-i18n=\"nav_findus\">FIND US</a></li>",
    "<li><a href=\"#findus\" onclick=\"event.preventDefault(); navScroll('findus')\" data-i18n=\"nav_findus\">FIND US</a></li>"
)

# 5. HTML: Strain pills div to button
content = content.replace(
    '<div class="strain-pill" id="pill-tropicana" onclick="selectStrain(\'tropicana\')" data-i18n="pill_tropicana">TROPICANA</div>',
    '<button class="strain-pill" id="pill-tropicana" onclick="selectStrain(\'tropicana\')" data-i18n="pill_tropicana">TROPICANA</button>'
)
content = content.replace(
    '<div class="strain-pill" id="pill-patronus" onclick="selectStrain(\'patronus\')" data-i18n="pill_patronus">PATRONUS</div>',
    '<button class="strain-pill" id="pill-patronus" onclick="selectStrain(\'patronus\')" data-i18n="pill_patronus">PATRONUS</button>'
)
content = content.replace(
    '<div class="strain-pill" id="pill-topweed" onclick="selectStrain(\'topweed\')" data-i18n="pill_topweed">TOP WEED</div>',
    '<button class="strain-pill" id="pill-topweed" onclick="selectStrain(\'topweed\')" data-i18n="pill_topweed">TOP WEED</button>'
)

# 6. HTML: Review count 200 to 150
content = content.replace(
    '<div class="hero-trust-number">200<span>+</span></div>',
    '<div class="hero-trust-number">150<span>+</span></div>'
)

# 7. HTML: VIEW MENU scroll target catalog to hero
content = content.replace(
    "onclick=\"navScroll('catalog')\"",
    "onclick=\"navScroll('hero')\""
)

# 8. JS: Thai footer year 2025 to 2026
content = content.replace(
    "footer_copy: '\u00a9 2025 \u0e27\u0e39\u0e14\u0e35\u0e49 \u0e27\u0e35\u0e14\u0e40\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e2d\u0e23\u0e4c \u00b7 \u0e40\u0e01\u0e32\u0e30\u0e1e\u0e30\u0e07\u0e31\u0e19, \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22'",
    "footer_copy: '\u00a9 2026 \u0e27\u0e39\u0e14\u0e35\u0e49 \u0e27\u0e35\u0e14\u0e40\u0e1e\u0e47\u0e01\u0e40\u0e01\u0e2d\u0e23\u0e4c \u00b7 \u0e40\u0e01\u0e32\u0e30\u0e1e\u0e30\u0e07\u0e31\u0e19, \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22'"
)

# 9. Remove catalog i18n keys (dead code)
en_catalog = (
    "        catalog_label: 'THE COLLECTION',\n"
    "        catalog_title: 'Curated Strains & Products',\n"
    "        all_certified: 'ALL PRODUCTS LAB CERTIFIED',\n"
    "        cat_sativa: 'SATIVA BLEND',\n"
    "        cat_indica: 'INDICA DOMINANT',\n"
    "        cat_topshelf: 'TOP SHELF',\n"
    "        cat_preroll: 'PRE-ROLL',\n"
    "        strain1_name: 'Tropicana Cherry',\n"
    "        strain1_cbd: 'CBD 26%',\n"
    "        strain1_thc: 'THC 0.2%',\n"
    "        strain1_desc: 'Bright citrus & cherry. Uplifting, tropical, perfect for daytime.',\n"
    "        strain2_name: 'Black Patronus',\n"
    "        strain2_thc: 'THC 27%',\n"
    "        strain2_cbd: 'CBD 0.2%',\n"
    "        strain2_desc: 'Deep, earthy, commanding. Heavy euphoria for experienced palates.',\n"
    "        strain3_name: '3.5 Top Weed',\n"
    "        strain3_premium: 'PREMIUM',\n"
    "        strain3_weight: '3.5g',\n"
    "        strain3_desc: 'Hand-trimmed, perfectly cured. Our finest flower, full stop.',\n"
    "        strain4_name: 'Joint',\n"
    "        strain4_tag: 'READY TO LIGHT',\n"
    "        strain4_desc: 'Premium flower, perfectly rolled. Made for the beach, the view, the moment.',\n"
    "        lab_certified: 'LAB CERTIFIED',\n"
)
if en_catalog in content:
    content = content.replace(en_catalog, '')
else:
    print('WARNING: en_catalog not found')

# find Thai catalog block by searching for the pattern
import re
th_pattern = r"        catalog_label: '[^']+',\n        catalog_title: '[^']+',\n        all_certified: '[^']+',\n        cat_sativa: '[^']+',\n        cat_indica: '[^']+',\n        cat_topshelf: '[^']+',\n        cat_preroll: '[^']+',\n        strain1_name: '[^']+',\n        strain1_cbd: '[^']+',\n        strain1_thc: '[^']+',\n        strain1_desc: '[^']+',\n        strain2_name: '[^']+',\n        strain2_thc: '[^']+',\n        strain2_cbd: '[^']+',\n        strain2_desc: '[^']+',\n        strain3_name: '[^']+',\n        strain3_premium: '[^']+',\n        strain3_weight: '[^']+',\n        strain3_desc: '[^']+',\n        strain4_name: '[^']+',\n        strain4_tag: '[^']+',\n        strain4_desc: '[^']+',\n        lab_certified: '[^']+',\n"
content = re.sub(th_pattern, '', content)

# 10. Add age gate CSS before </style>
age_gate_css = """
    /* -- AGE GATE -------------------------------------------- */
    #age-gate {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: var(--bg);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    #age-gate.hidden { display: none; }

    .age-gate-card { text-align: center; max-width: 400px; width: 100%; }

    .age-gate-eyebrow {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 14px;
    }

    .age-gate-brand {
      font-family: 'Outfit', system-ui, sans-serif;
      font-size: clamp(20px, 4vw, 30px);
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text);
      margin-bottom: 8px;
    }

    .age-gate-sub {
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 44px;
    }

    .age-gate-question {
      font-size: 17px;
      color: var(--text);
      line-height: 1.5;
      margin-bottom: 28px;
    }

    .age-gate-btns {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-bottom: 24px;
    }

    .age-gate-confirm {
      background: var(--green-lime);
      color: #071007;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 13px 36px;
      border-radius: 3px;
      border: none;
      cursor: pointer;
      transition: all 0.22s;
    }
    .age-gate-confirm:hover {
      background: var(--green-lime-hover);
      transform: translateY(-1px);
      box-shadow: 0 8px 28px rgba(90,154,72,0.28);
    }

    .age-gate-decline {
      background: transparent;
      color: var(--text-muted);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 13px 28px;
      border-radius: 3px;
      border: 1px solid var(--border);
      cursor: pointer;
      transition: all 0.22s;
    }
    .age-gate-decline:hover { border-color: rgba(255,255,255,0.14); color: var(--text); }

    .age-gate-disclaimer {
      font-size: 10px;
      color: var(--text-faint);
      letter-spacing: 0.04em;
    }
"""
content = content.replace('  </style>\n</head>', age_gate_css + '  </style>\n</head>')

# 11. Add age gate HTML before navbar
age_gate_html = """  <!-- AGE GATE -->
  <div id="age-gate">
    <div class="age-gate-card">
      <p class="age-gate-eyebrow">WELCOME TO</p>
      <h2 class="age-gate-brand">WOODY WEEDPECKER</h2>
      <p class="age-gate-sub">Cannabis Sommelier &middot; Koh Phangan</p>
      <p class="age-gate-question">Are you 18 years of age or older?</p>
      <div class="age-gate-btns">
        <button class="age-gate-confirm" id="age-confirm">Yes, I'm 18+</button>
        <button class="age-gate-decline" id="age-decline">No</button>
      </div>
      <p class="age-gate-disclaimer">By entering you confirm you are of legal age in your jurisdiction.</p>
    </div>
  </div>

"""
content = content.replace('  <!-- NAVBAR -->', age_gate_html + '  <!-- NAVBAR -->')

# 12. Add age gate JS at top of script
age_gate_js = """    /* -- AGE GATE -------------------------------------------- */
    (function() {
      const gate = document.getElementById('age-gate');
      if (localStorage.getItem('woody_age_verified')) {
        gate.classList.add('hidden');
        return;
      }
      document.getElementById('age-confirm').addEventListener('click', function() {
        localStorage.setItem('woody_age_verified', '1');
        gate.classList.add('hidden');
      });
      document.getElementById('age-decline').addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
      });
    })();

"""
content = content.replace('    /* -- GSAP PLUGINS', age_gate_js + '    /* -- GSAP PLUGINS')

if content == original:
    print('ERROR: No changes were made!')
else:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('All changes applied successfully.')
    print(f'Original length: {len(original)}, New length: {len(content)}')
