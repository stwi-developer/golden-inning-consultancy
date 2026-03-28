function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMenu() { var m = document.getElementById('mobileMenu'); if (m) m.classList.remove('open'); }
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mobile-menu a').forEach(function(l){ l.addEventListener('click', closeMenu); });
});
function showSubCat(id, btn) {
  document.querySelectorAll('.cat-right-section').forEach(function(s){ s.classList.remove('active'); });
  document.querySelectorAll('.sidebar-btn').forEach(function(b){ b.classList.remove('active'); });
  var t = document.getElementById('subcat-' + id);
  if (t) t.classList.add('active');
  if (btn) btn.classList.add('active');
}
