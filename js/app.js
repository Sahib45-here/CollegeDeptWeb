/* =====================================================
   app.js — Behaviour for the College Department Website
   ===================================================== */

// --- 1. THEME TOGGLE (Dark / Light Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');

// Check if the button exists on the page (it should, because it's in the header)
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the <body> tag
    document.body.classList.toggle('dark-mode');
    
    // Change the button icon based on the current mode
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️'; // Sun icon for dark mode
    } else {
      themeToggleBtn.textContent = '🌙'; // Moon icon for light mode
    }
  });
}