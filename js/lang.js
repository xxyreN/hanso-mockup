// Fonts — hide body until loaded, prevent FOUT
document.fonts.ready.then(function () { document.body.classList.add('fonts-ready'); });
setTimeout(function () { document.body.classList.add('fonts-ready'); }, 800);

// Language toggle — minimal, no framework
(function () {
  const STORAGE_KEY = 'hanso-lang';
  const html = document.documentElement;

  function setLang(lang) {
    html.classList.remove('lang-en', 'lang-es');
    html.classList.add('lang-' + lang);
    html.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // init
  const saved = localStorage.getItem(STORAGE_KEY) || 'es';
  setLang(saved);

  // bind
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-toggle button');
    if (btn && btn.dataset.lang) {
      setLang(btn.dataset.lang);
    }
  });
})();

// Hamburger mobile menu
(function () {
  var btn = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.classList.remove('active');
      menu.classList.remove('open');
    });
  });
})();
