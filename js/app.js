/* =====================================================
   Professional CV — interactions
   Scroll reveal · CV section filter · deep links
   ===================================================== */

'use strict';

/* ---------- Scroll reveal ---------- */
(function revealEngine() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();

/* ---------- CV section menu ---------- */
(function cvMenuEngine() {
  const tabs = document.querySelectorAll('[data-cv-show]');
  const sections = document.querySelectorAll('[data-cv-section]');

  function showSection(id) {
    document.querySelectorAll('#cv-menu-buttons .cv-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.cvShow === id);
    });

    sections.forEach((sec) => {
      const match = id === 'all' || sec.dataset.cvSection === id;
      sec.classList.toggle('is-hidden', !match);
      if (match) {
        sec.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      }
    });

    const target =
      id === 'all'
        ? document.getElementById('cv-menu')
        : document.getElementById(id) || document.getElementById('cv-menu');

    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
    }

    if (id !== 'all' && history.replaceState) {
      history.replaceState(null, '', '#' + id);
    } else if (id === 'all' && history.replaceState) {
      history.replaceState(null, '', location.pathname);
    }
  }

  tabs.forEach((el) => {
    el.addEventListener('click', (e) => {
      const id = el.dataset.cvShow;
      if (!id) return;
      if (el.tagName === 'A') e.preventDefault();
      showSection(id);
    });
  });

  const hash = location.hash.replace('#', '');
  if (hash && document.querySelector(`[data-cv-section="${hash}"]`)) {
    showSection(hash);
  }

  window.showCvSection = showSection;
})();

/* ---------- Header shadow on scroll ---------- */
(function headerState() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.style.boxShadow =
      window.scrollY > 8 ? '0 8px 24px rgba(18, 21, 26, 0.06)' : 'none';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
