function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  var m = document.getElementById('mobileMenu');
  if (m) m.classList.remove('open');
}
function showSubCat(id, btn) {
  document.querySelectorAll('.cat-right-section').forEach(function(s){ s.classList.remove('active'); });
  document.querySelectorAll('.sidebar-btn').forEach(function(b){ b.classList.remove('active'); });
  var t = document.getElementById('subcat-' + id);
  if (t) t.classList.add('active');
  if (btn) btn.classList.add('active');
  history.replaceState(null, '', '#' + id);
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mobile-menu a').forEach(function(l){ l.addEventListener('click', closeMenu); });
  // Auto-select subcategory from URL hash (e.g. page.html#tile-grouts)
  var hash = window.location.hash.replace('#', '');
  if (hash) {
    var target = document.getElementById('subcat-' + hash);
    if (target) {
      document.querySelectorAll('.cat-right-section').forEach(function(s){ s.classList.remove('active'); });
      document.querySelectorAll('.sidebar-btn').forEach(function(b){ b.classList.remove('active'); });
      target.classList.add('active');
      document.querySelectorAll('.sidebar-btn').forEach(function(b){
        if (b.getAttribute('onclick') && b.getAttribute('onclick').indexOf("'" + hash + "'") !== -1) {
          b.classList.add('active');
        }
      });
      // Scroll to top after hash navigation
      window.scrollTo(0, 0);
    }
  }
});
