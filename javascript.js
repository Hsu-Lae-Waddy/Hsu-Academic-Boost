 
   // Initialize Lucide Icons first
   lucide.createIcons();

   // Mobile menu
   document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
   });

   document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
     document.getElementById('mobile-menu').classList.add('hidden');
    });
   });

   // Smooth scroll for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
     e.preventDefault();
     const target = document.querySelector(this.getAttribute('href'));
     if (target) {
      target.scrollIntoView({
       behavior: 'smooth',
       block: 'start'
      });
     }
    });
   });

   // Navbar scroll effect
   window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
     navbar.classList.add('shadow-lg');
    } else {
     navbar.classList.remove('shadow-lg');
    }
   });

  
    
  

   // SDK initialization (kept for compatibility)
   const defaultConfig = {
    hero_title: 'Hsu Academic Boost',
    hero_subtitle: 'Learn Smart. Build Strong Future. — ကလေးများ ပျော်ရွှင်စွာ Game နှင့် Interactive Project များ ဖန်တီးရင်း သင်ယူနိုင်ပါသည်။',
    trial_banner_text: '🎉 အခမဲ့ Trial Class ရှိပါတယ်! 🚀 ယခု စတင်လေ့လာပါ!',
    teacher_name: 'Teacher Hsu',
    teacher_desc: 'Computer Science Student & Coding Instructor',
    footer_tagline: 'Learn Smart. Build Strong Future.',
    background_color: '#f8fafc',
    surface_color: '#ffffff',
    text_color: '#1e293b',
    primary_action_color: '#14b8a6',
    secondary_action_color: '#64748b',
    font_family: 'Outfit',
    font_size: 16
   };

   // Initialize SDKs if available
   if (window.elementSdk) {
    window.elementSdk.init({
     defaultConfig,
     onConfigChange: async (config) => {
      const c = { ...defaultConfig, ...config };
      const heroTitle = document.getElementById('hero-title');
      if (heroTitle) {
       heroTitle.innerHTML = c.hero_title.replace(/(Boost|Academic)/g, '<span class="text-teal-400">$1</span>');
      }
      const heroSubtitle = document.getElementById('hero-subtitle');
      if (heroSubtitle) heroSubtitle.textContent = c.hero_subtitle;
      const trialText = document.getElementById('trial-banner-text');
      if (trialText) trialText.textContent = c.trial_banner_text;
      const teacherName = document.getElementById('teacher-name-el');
      if (teacherName) teacherName.textContent = c.teacher_name;
      const teacherDesc = document.getElementById('teacher-desc');
      if (teacherDesc) teacherDesc.textContent = c.teacher_desc;
     }
    });
   }

   if (window.dataSdk) {
    const dataHandler = { onDataChanged(data) {} };
    window.dataSdk.init(dataHandler).catch(console.error);
   }

   // Re-initialize icons after dynamic content
   setTimeout(() => lucide.createIcons(), 100);
   

const MASTER_PASSWORD = 'Hsuacademicboost2026';

let targetPage = "";

// OPEN PASSWORD POPUP
function showPasswordOverlay(subject) {

  // Prevent direct opening
  event.preventDefault();

  // Decide which page to open
  if (subject === 'scratch') {
    targetPage = 'ScratchLesson.html';
  }
  if (subject === 'python') {
    targetPage = 'PythonLesson.html';
  }
  if (subject === 'web') {
    targetPage = 'HtmlCSSLesson.html';
  }
  if (subject === 'cs') {
    targetPage = 'CSLesson.html';
  }

  if (subject === 'network') {
    targetPage = 'NetworkLesson.html';
  }

  document
    .getElementById('password-overlay')
    .classList.remove('hidden');

  const input = document.getElementById('password-input');

  input.value = '';
  input.placeholder = 'Enter Password';
  input.focus();
}

// CLOSE POPUP
function closePasswordOverlay() {
  document
    .getElementById('password-overlay')
    .classList.add('hidden');
}

// UNLOCK
function unlockLesson() {

  const input = document.getElementById('password-input');

  const password = input.value.trim();

  if (password === MASTER_PASSWORD) {

    // Success Effect
    input.value = '✅ Access Granted';
    input.style.background = '#10b981';
    input.style.color = 'white';

    setTimeout(() => {
      window.location.href = targetPage;
    }, 700);

  } else {

    input.value = '';
    input.placeholder = '❌ Wrong Password';
    input.style.animation = 'shake 0.4s';

    setTimeout(() => {
      input.style.animation = '';
      input.placeholder = 'Enter Password';
    }, 1500);
  }
}

// ENTER KEY
document.addEventListener('DOMContentLoaded', () => {

  document
    .getElementById('password-input')
    .addEventListener('keypress', function(e) {

      if (e.key === 'Enter') {
        unlockLesson();
      }
    });

  // CLICK OUTSIDE
  document
    .getElementById('password-overlay')
    .addEventListener('click', function(e) {

      if (e.target === this) {
        closePasswordOverlay();
      }
    });

  // ESC KEY
  document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape') {
      closePasswordOverlay();
    }
  });
});
