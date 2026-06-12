/* ============================================================================
   Molecular Properties Calculator — Documentation
   Shared behaviour for every page: theme toggle, mobile sidebar, active-page
   highlight, auto "On this page" rail with scrollspy, reading progress.
   No dependencies. Works over file:// and GitHub Pages alike.
   ============================================================================ */
(function () {
  'use strict';
  var root = document.documentElement;

  /* ---- Theme toggle (persisted) ---- */
  var tbtn = document.getElementById('themeBtn');
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    var sun = document.getElementById('sunIcon'), moon = document.getElementById('moonIcon');
    if (sun && moon) { sun.style.display = t === 'dark' ? 'none' : 'block'; moon.style.display = t === 'dark' ? 'block' : 'none'; }
    try { localStorage.setItem('mpc-theme', t); } catch (e) {}
  }
  var saved;
  try { saved = localStorage.getItem('mpc-theme'); } catch (e) {}
  applyTheme(saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));
  if (tbtn) tbtn.addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---- Mobile sidebar ---- */
  var sb = document.getElementById('sidebar'), mb = document.getElementById('menuBtn'), sc = document.getElementById('scrim');
  function toggleSb(open) { if (!sb) return; sb.classList.toggle('open', open); if (sc) sc.classList.toggle('show', open); }
  if (mb) mb.addEventListener('click', function () { toggleSb(!sb.classList.contains('open')); });
  if (sc) sc.addEventListener('click', function () { toggleSb(false); });

  /* ---- Highlight the current page in the sidebar ---- */
  var page = document.body.getAttribute('data-page');
  if (page) {
    var current = document.querySelector('.side-link[data-page="' + page + '"]');
    if (current) current.classList.add('active');
  }
  // close mobile sidebar when a link is tapped
  Array.prototype.forEach.call(document.querySelectorAll('.side-link'), function (l) {
    l.addEventListener('click', function () { if (window.innerWidth <= 1000) toggleSb(false); });
  });

  /* ---- Auto-build the "On this page" rail from the content headings ---- */
  var toc = document.getElementById('toc');
  var content = document.querySelector('.content');
  var spyTargets = [];
  if (toc && content) {
    var heads = content.querySelectorAll('h2, h3');
    if (heads.length > 1) {
      var heading = document.createElement('h5');
      heading.textContent = 'On this page';
      toc.appendChild(heading);
      Array.prototype.forEach.call(heads, function (h) {
        if (!h.id) {
          h.id = h.textContent.trim().toLowerCase()
            .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 60);
        }
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.className = 'toc-link' + (h.tagName === 'H3' ? ' lvl-3' : '');
        a.textContent = h.textContent;        // safe: no innerHTML, text only
        toc.appendChild(a);
        spyTargets.push(h);
      });
    } else {
      toc.style.display = 'none';
    }
  }

  /* ---- Scrollspy for the on-page rail ---- */
  if (spyTargets.length) {
    var tocLinks = toc.querySelectorAll('.toc-link');
    var byId = {};
    tocLinks.forEach(function (l) { byId[l.getAttribute('href').slice(1)] = l; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          tocLinks.forEach(function (l) { l.classList.remove('active'); });
          var a = byId[e.target.id];
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });
    spyTargets.forEach(function (t) { spy.observe(t); });
  }

  /* ---- Reading progress bar ---- */
  var pb = document.getElementById('progress');
  if (pb) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
      pb.style.width = (max > 0 ? (h.scrollTop / max * 100) : 0) + '%';
    }, { passive: true });
  }

  /* ---- Current year in footer (if present) ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
