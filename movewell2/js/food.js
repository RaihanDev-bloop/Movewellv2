/* ============================================================
   FOOD TIPS PAGE JAVASCRIPT
============================================================ */

// ==================== DATA — VIDEO CARDS ====================
const FOOD_DATA = {
  langsung: [
    {
      embedId: 'n_Ag9BzwHnI',
      title: 'Green Smoothie Tinggi Protein – Energi Pagi Anti Ribet',
      source: 'Downshiftology · YouTube'
    },
    {
      embedId: 'U0bhE67HuDY',
      title: 'Overnight Oats 5 Varian – Sarapan Sehat Tanpa Masak',
      source: 'Pick Up Limes · YouTube'
    },
    {
      embedId: 'cbKkB3POqaY',
      title: 'Salad Mangga Alpukat – Segar, Bergizi, Langsung Santap',
      source: 'Healthy Grocery Girl · YouTube'
    },
    {
      embedId: 'YaXPRqUwItQ',
      title: 'Banana Peanut Butter Bites – Snack Protein Tinggi',
      source: 'FullyRaw Kristina · YouTube'
    },
    {
      embedId: 'IODxDxX7oi4',
      title: 'Infused Water 5 Resep – Hidrasi Menyenangkan Sepanjang Hari',
      source: 'Clean &amp; Delicious · YouTube'
    },
    {
      embedId: 'ml6cT4AZdqI',
      title: 'Greek Yogurt Parfait – Dessert Sehat Tanpa Dimasak',
      source: 'EatSimpleFood · YouTube'
    }
  ],
  diolah: [
    {
      embedId: 'n_Ag9BzwHnI',
      title: 'Air Fryer Ayam Rempah – Protein Tinggi Rendah Lemak',
      source: 'Joshua Weissman · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=air+fryer',
      beliLabel: '🛒 Beli Air Fryer'
    },
    {
      embedId: 'U0bhE67HuDY',
      title: 'Blender Protein Shake Post-Workout – Pemulihan Otot Optimal',
      source: 'Remington James · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=blender+portable',
      beliLabel: '🛒 Beli Blender Portable'
    },
    {
      embedId: 'gC_L9qAHVJ8',
      title: 'Meal Prep Mingguan dengan Rice Cooker – Hemat Waktu &amp; Sehat',
      source: 'Ethan Chlebowski · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=rice+cooker+mini',
      beliLabel: '🛒 Beli Rice Cooker'
    },
    {
      embedId: 'cbKkB3POqaY',
      title: 'Steamer Sayuran – Nutrisi Terjaga, Rasa Tetap Lezat',
      source: 'Rainbow Plant Life · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=food+steamer',
      beliLabel: '🛒 Beli Food Steamer'
    }
  ]
};

// ==================== RENDER CARD FUNCTION ====================
function renderFoodCard(item) {
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
function populateFoodGrids() {
  const langsungContainer = document.getElementById('cards-food-langsung');
  const diolahContainer = document.getElementById('cards-food-diolah');

  if (langsungContainer) {
    langsungContainer.innerHTML = FOOD_DATA.langsung.map(renderFoodCard).join('');
  }
  if (diolahContainer) {
    diolahContainer.innerHTML = FOOD_DATA.diolah.map(renderFoodCard).join('');
  }
}

// ==================== SETUP TABS ====================
function setupFoodTabs() {
  const tabsContainer = document.getElementById('food-tabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const cat = btn.dataset.cat;

    // Update active tab button
    tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide category sections
    const langsungSection = document.getElementById('food-langsung');
    const diolahSection = document.getElementById('food-diolah');

    if (langsungSection && diolahSection) {
      if (cat === 'langsung') {
        langsungSection.classList.add('active');
        diolahSection.classList.remove('active');
      } else {
        langsungSection.classList.remove('active');
        diolahSection.classList.add('active');
      }
    }
  });
}

// ==================== NAVBAR FUNCTIONS ====================
function setupFoodNavbar() {
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
function initFood() {
  populateFoodGrids();
  setupFoodTabs();
  setupFoodNavbar();
}

initFood();