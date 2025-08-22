// GDPR Consent Manager
// Handles cookie consent banner and manages user consent preferences

(function() {
  const CONSENT_KEY = 'urso-cookie-consent';
  const CONSENT_EXPIRY = 'urso-consent-expiry';
  const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
  
  function hasValidConsent() {
    const consent = localStorage.getItem(CONSENT_KEY);
    const expiry = localStorage.getItem(CONSENT_EXPIRY);
    
    if (!consent || !expiry) return false;
    
    const now = Date.now();
    if (now > parseInt(expiry)) {
      // Consent expired, remove it
      localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(CONSENT_EXPIRY);
      return false;
    }
    
    return consent === 'accepted';
  }
  
  function grantConsent() {
    // Update Google Consent Mode
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      
      // Enable additional Google Analytics features after consent
      gtag('config', 'G-QQ8WX2FKGX', {
        'allow_google_signals': true,
        'allow_ad_personalization_signals': true
      });
    }
    
    // Load Facebook Pixel
    if (typeof loadFacebookPixel === 'function') {
      loadFacebookPixel();
    }
    
    // Store consent with expiry
    const expiryTime = Date.now() + CONSENT_DURATION;
    localStorage.setItem(CONSENT_KEY, 'accepted');
    localStorage.setItem(CONSENT_EXPIRY, expiryTime.toString());
  }
  
  function showBanner() {
    const banner = document.getElementById('cookie-notice');
    if (banner) {
      banner.style.display = 'block';
    }
  }
  
  function hideBanner() {
    const banner = document.getElementById('cookie-notice');
    if (banner) {
      banner.style.display = 'none';
    }
  }
  
  // Initialize consent system
  function initConsent() {
    if (hasValidConsent()) {
      // User has already consented, grant permissions
      grantConsent();
      hideBanner();
    } else {
      // Show consent banner
      showBanner();
    }
    
    // Handle accept button click
    const acceptBtn = document.getElementById('cookie-notice-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function(e) {
        e.preventDefault();
        grantConsent();
        hideBanner();
      });
    }
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
})();