/* ============================================================
   PAIN RECOVERY PAGE JAVASCRIPT
============================================================ */

// ==================== DATA — VIDEO CARDS ====================
const PAIN_DATA = {
  tanpaAlat: [
    {
      embedId: 'Q_fFattg8N0',
      title: 'Stretching Punggung Bawah – Hilangkan Nyeri Pinggang',
      source: 'Bob &amp; Brad · YouTube'
    },
    {
      embedId: 'g8aGBL8AUQU',
      title: 'Latihan Leher Kaku – Terapi Gerak untuk Nyeri Leher',
      source: 'Dr Jo · YouTube'
    },
    {
      embedId: '4BOTvaRaDms',
      title: 'Knee Pain Relief – Penguatan Lutut Tanpa Beban',
      source: 'Physical Therapy Video · YouTube'
    },
    {
      embedId: 'UEEsdXn8oNU',
      title: 'Hip Flexor Stretch – Pemulihan Nyeri Panggul Pekerja Kantoran',
      source: 'Tom Merrick · YouTube'
    },
    {
      embedId: 'L_xrDatykMI',
      title: 'Shoulder Mobility Routine – Bahu Bebas Nyeri',
      source: 'The Movement Fix · YouTube'
    },
    {
      embedId: 'nt4N2KqHoWQ',
      title: 'Posture Correction Exercises – Punggung Tegak &amp; Kuat',
      source: 'Upright Health · YouTube'
    }
  ],
  denganAlat: [
    {
      embedId: '2y6bGV5GVBU',
      title: 'Foam Rolling Full Body – Lepaskan Ketegangan Otot',
      source: 'OPTP · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=foam+roller',
      beliLabel: '🛒 Beli Foam Roller'
    },
    {
      embedId: 'nt4N2KqHoWQ',
      title: 'Massage Ball Trigger Point – Hilang Nyeri di Titik Tepat',
      source: 'Mobility Mastery · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=massage+ball',
      beliLabel: '🛒 Beli Massage Ball'
    },
    {
      embedId: 'Q_fFattg8N0',
      title: 'Resistance Band Rehabilitation – Pemulihan Cedera Bahu',
      source: 'Jeff Cavaliere · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=resistance+band+rehab',
      beliLabel: '🛒 Beli Resistance Band'
    },
    {
      embedId: 'g8aGBL8AUQU',
      title: 'TENS Unit &amp; Stretching Combo – Nyeri Punggung Kronis',
      source: 'Sports Injury Physio · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=TENS+unit+alat+fisioterapi',
      beliLabel: '🛒 Beli Alat TENS'
    }
  ]
};

// ==================== RENDER CARD FUNCTION ====================
function renderPainCard(item) {
  const hasBeli = item.beliLink;
  const buyBtn = hasBeli
    ? `<a href="${item.beliLink}" target="_blank" rel="noopener" class="btn-buy">${item.beliLabel}</a>`
    : '';

  return `
    <div class="vid-card">
      <div class="vid-wrapper">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${item.embedId}?rel=0&modestbranding=1"
          title="${item.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
      <div class="vid-body">
        <div class="vid-title">${item.title}</div>
        ${buyBtn}
        <div class="vid-source">${item.source}</div>
      </div>
    </div>`;
}

// ==================== POPULATE GRIDS ====================
function populatePainGrids() {
  const tanpaAlatContainer = document.getElementById('cards-pain-tanpa');
  const denganAlatContainer = document.getElementById('cards-pain-dengan');

  if (tanpaAlatContainer) {
    tanpaAlatContainer.innerHTML = PAIN_DATA.tanpaAlat.map(renderPainCard).join('');
  }
  if (denganAlatContainer) {
    denganAlatContainer.innerHTML = PAIN_DATA.denganAlat.map(renderPainCard).join('');
  }
}

// ==================== SETUP TABS ====================
function setupPainTabs() {
  const tabsContainer = document.getElementById('pain-tabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const cat = btn.dataset.cat;

    // Update active tab button
    tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide category sections
    const tanpaAlatSection = document.getElementById('pain-tanpa-alat');
    const denganAlatSection = document.getElementById('pain-dengan-alat');

    if (tanpaAlatSection && denganAlatSection) {
      if (cat === 'tanpa-alat') {
        tanpaAlatSection.classList.add('active');
        denganAlatSection.classList.remove('active');
      } else {
        tanpaAlatSection.classList.remove('active');
        denganAlatSection.classList.add('active');
      }
    }
  });
}

// ==================== NAVBAR FUNCTIONS ====================
function setupPainNavbar() {
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav) nav.classList.remove('open');
    });
  });
}

// ==================== INIT ====================
function initPain() {
  populatePainGrids();
  setupPainTabs();
  setupPainNavbar();
}

initPain();