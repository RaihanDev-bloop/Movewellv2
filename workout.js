/* ============================================================
   WORKOUT PAGE JAVASCRIPT
============================================================ */

// ==================== DATA — VIDEO CARDS ====================
const WORKOUT_DATA = {
  tanpaAlat: [
    {
      embedId: 'cbKkB3POqaY',
      title: 'Full Body Workout 30 Menit Tanpa Alat – Cocok Pemula',
      source: 'Sydney Cummings Houdyshell · YouTube'
    },
    {
      embedId: 'UBMk30rjy0o',
      title: 'HIIT 20 Menit – Bakar Kalori Maksimal di Ruang Tamu',
      source: 'MommaStrong · YouTube'
    },
    {
      embedId: 'gC_L9qAHVJ8',
      title: 'Yoga untuk Pemula – Fleksibilitas &amp; Kekuatan Tubuh',
      source: 'Yoga With Adriene · YouTube'
    },
    {
      embedId: 'IODxDxX7oi4',
      title: 'Bodyweight Strength Training – Tanpa Alat, Tetap Kuat',
      source: 'FitnessBlender · YouTube'
    },
    {
      embedId: 'YaXPRqUwItQ',
      title: 'Core &amp; Abs Workout – Perut Kencang di Rumah',
      source: 'Pamela Reif · YouTube'
    },
    {
      embedId: 'ml6cT4AZdqI',
      title: 'Latihan Kaki Tanpa Alat – Squat &amp; Lunge Variatif',
      source: 'HASfit · YouTube'
    },
    {
      embedId: 'ml6cT4AZdqI',
      title: 'Latihan Kaki Tanpa Alat – Squat &amp; Lunge Variatif',
      source: 'HASfit · YouTube'
    }
  ],
  denganAlat: [
    {
      embedId: 'vc1E5CfRfos',
      title: 'Dumbbell Full Body Workout – Semua Level',
      source: 'Jeff Nippard · YouTube',
      beliLink: 'https://s.shopee.co.id/8V6IHs0QFs',
      beliLabel: '🛒 Beli Dumbbell'
    },
    {
      embedId: 'U0bhE67HuDY',
      title: 'Resistance Band Total Body Training – Efektif di Rumah',
      source: 'ScottHermanFitness · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=resistance+band',
      beliLabel: '🛒 Beli Resistance Band'
    },
    {
      embedId: 'IODxDxX7oi4',
      title: 'Kettlebell Home Workout – Kekuatan &amp; Kardio Kombinasi',
      source: 'Calisthenicmovement · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=kettlebell',
      beliLabel: '🛒 Beli Kettlebell'
    },
    {
      embedId: 'gC_L9qAHVJ8',
      title: 'Pull-Up Bar Training di Pintu Rumah – Upper Body Power',
      source: 'Austin Dunham · YouTube',
      beliLink: 'https://shopee.co.id/search?keyword=pull+up+bar+pintu',
      beliLabel: '🛒 Beli Pull-Up Bar'
    }
  ]
};

// ==================== RENDER CARD FUNCTION ====================
function renderWorkoutCard(item) {
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
function populateWorkoutGrids() {
  const tanpaAlatContainer = document.getElementById('cards-workout-tanpa');
  const denganAlatContainer = document.getElementById('cards-workout-dengan');

  if (tanpaAlatContainer) {
    tanpaAlatContainer.innerHTML = WORKOUT_DATA.tanpaAlat.map(renderWorkoutCard).join('');
  }
  if (denganAlatContainer) {
    denganAlatContainer.innerHTML = WORKOUT_DATA.denganAlat.map(renderWorkoutCard).join('');
  }
}

// ==================== SETUP TABS ====================
function setupWorkoutTabs() {
  const tabsContainer = document.getElementById('workout-tabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const cat = btn.dataset.cat;

    // Update active tab button
    tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide category sections
    const tanpaAlatSection = document.getElementById('workout-tanpa-alat');
    const denganAlatSection = document.getElementById('workout-dengan-alat');

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
function setupWorkoutNavbar() {
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
function initWorkout() {
  populateWorkoutGrids();
  setupWorkoutTabs();
  setupWorkoutNavbar();
}

initWorkout();