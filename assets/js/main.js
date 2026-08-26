// ヘッダーのスクロール検知
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// モバイルナビ開閉
const toggle = document.getElementById('menuToggle');
const spNav = document.getElementById('spNav');
if (toggle && spNav) {
  toggle.addEventListener('click', () => {
    spNav.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  spNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    spNav.classList.remove('open');
    toggle.classList.remove('open');
  }));
}

// スクロールフェードイン
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// FAQ開閉(guideページ)
document.querySelectorAll('.faq-item summary').forEach(s => {
  s.addEventListener('click', () => {});
});
