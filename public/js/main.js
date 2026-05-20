// Cookie consent
(function() {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    document.addEventListener('DOMContentLoaded', function() {
      const banner = document.getElementById('cookieBanner');
      if (banner) banner.classList.add('show');
    });
  }
})();

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
}

function rejectCookies() {
  localStorage.setItem('cookie_consent', 'rejected');
  document.getElementById('cookieBanner').classList.remove('show');
}
