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


  // Journey orbit: drag to rotate, click a stage to bring it to the front.
  (function () {
    var orbit = document.getElementById('orbit');
    var stage = document.getElementById('orbit-stage');
    var panel = document.getElementById('orbit-panel');
    if (!orbit || !stage || !panel) return;
    var items = Array.prototype.slice.call(stage.querySelectorAll('.orbit-item'));
    var n = items.length;
    var step = 2 * Math.PI / n;
    var angle = 0, target = null, dragging = null, moved = 0;
    var hover = false, idleUntil = 0, front = -1;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    orbit.classList.add('is-live');
    items.forEach(function (it, i) {
      it.querySelector('.orbit-node').style.setProperty('--t', (i / (n - 1)).toFixed(3));
    });

    function render() {
      var w = stage.clientWidth;
      var rx = Math.max(60, Math.min(w / 2 - items[0].offsetWidth * 0.6, 420));
      var best = 0, bestC = -2;
      items.forEach(function (it, i) {
        var th = i * step + angle;
        var c = Math.cos(th), d = (c + 1) / 2;
        if (c > bestC) { bestC = c; best = i; }
        var x = Math.sin(th) * rx, y = c * 66;
        var sc = 0.68 + 0.42 * d;
        it.style.transform = 'translate(-50%, -50%) translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + sc.toFixed(3) + ')';
        it.style.opacity = (0.3 + 0.7 * d).toFixed(3);
        it.style.zIndex = String(Math.round(d * 100));
      });
      if (best !== front) {
        if (front >= 0) items[front].classList.remove('is-front');
        front = best;
        items[front].classList.add('is-front');
        var node = items[front].querySelector('.orbit-node');
        panel.innerHTML = items[front].querySelector('.orbit-detail').innerHTML;
        panel.style.setProperty('--c', getComputedStyle(node).getPropertyValue('--c'));
      }
    }
    function goTo(i) {
      target = -i * step;
      idleUntil = performance.now() + 4000;
    }
    items.forEach(function (it, i) {
      it.querySelector('.orbit-node').addEventListener('click', function () {
        if (moved > 4) { moved = 0; return; }
        goTo(i);
      });
    });
    document.getElementById('orbit-prev').addEventListener('click', function () { goTo((front - 1 + n) % n); });
    document.getElementById('orbit-next').addEventListener('click', function () { goTo((front + 1) % n); });

    stage.addEventListener('pointerdown', function (e) { dragging = { x: e.clientX, m: 0 }; moved = 0; idleUntil = performance.now() + 4000; });
    stage.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - dragging.x;
      dragging.x = e.clientX;
      dragging.m += Math.abs(dx);
      if (dragging.m > 4) {
        try { stage.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        angle += dx * 0.006;
        target = null;
        idleUntil = performance.now() + 4000;
        render();
      }
    });
    function endDrag() { if (dragging) moved = dragging.m; dragging = null; }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    stage.addEventListener('pointerenter', function () { hover = true; });
    stage.addEventListener('pointerleave', function () { hover = false; dragging = null; });
    stage.addEventListener('focusin', function () { hover = true; });
    stage.addEventListener('focusout', function () { hover = false; });
    window.addEventListener('resize', render);

    var last = 0;
    function loop(ts) {
      requestAnimationFrame(loop);
      if (ts - last < 33 || dragging) return;
      last = ts;
      if (target !== null) {
        var diff = ((target - angle + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
        angle += diff * 0.14;
        if (Math.abs(diff) < 0.002) { angle = target; target = null; }
        render();
      } else if (!reduce && !hover && ts > idleUntil) {
        angle += 0.006;
        render();
      }
    }
    render();
    requestAnimationFrame(loop);
  })();

  document.getElementById('year').textContent = new Date().getFullYear();
})();
