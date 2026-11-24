// Small progressive enhancements. The page reads fine without JavaScript.
(function () {
  var root = document.documentElement;

  // Theme toggle (initial theme is set inline in <head> to avoid a flash).
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('dc-theme', next); } catch (e) { /* storage blocked */ }
  });

  // Mobile menu
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Toast + copy email
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
  }
  var EMAIL = 'djchourey@gmail.com';
  document.querySelectorAll('.js-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(EMAIL).then(
          function () { showToast('Copied: ' + EMAIL); },
          function () { showToast('Email: ' + EMAIL); }
        );
      } else {
        showToast('Email: ' + EMAIL);
      }
    });
  });

  // Case study filter
  var tabs = document.querySelectorAll('.tab');
  var cards = document.querySelectorAll('.card');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var f = tab.getAttribute('data-filter');
      tabs.forEach(function (t) { t.setAttribute('aria-pressed', String(t === tab)); });
      cards.forEach(function (c) { c.hidden = f !== 'all' && c.getAttribute('data-cat') !== f; });
    });
  });

  // Case study dialogs
  document.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var d = document.getElementById(btn.getAttribute('data-open'));
      if (d && d.showModal) d.showModal();
    });
  });
  document.querySelectorAll('dialog.modal').forEach(function (d) {
    // Close when clicking the backdrop (outside the panel).
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  });

  // Expand / collapse all experience
  var toggleAll = document.getElementById('toggle-all');
  var items = document.querySelectorAll('.timeline details');
  function syncToggleLabel() {
    var allOpen = Array.prototype.every.call(items, function (d) { return d.open; });
    toggleAll.textContent = allOpen ? 'Collapse All Details' : 'Expand All Details';
  }
  toggleAll.addEventListener('click', function () {
    var allOpen = Array.prototype.every.call(items, function (d) { return d.open; });
    items.forEach(function (d) { d.open = !allOpen; });
    syncToggleLabel();
  });
  items.forEach(function (d) { d.addEventListener('toggle', syncToggleLabel); });
  syncToggleLabel();

  document.getElementById('year').textContent = new Date().getFullYear();
})();
