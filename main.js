/* ===== SPRINT 3: Behaviour ===== */

// Highlight today's row in the opening hours table
(function highlightToday() {
  var row = document.querySelector('#hours tr[data-d="' + new Date().getDay() + '"]');
  if (row) {
    row.className = 'today';
    row.firstElementChild.textContent += ' (today)';
  }
})();
