// Google Consent Mode v2 Setup
// This script initializes Google Analytics with GDPR-compliant consent mode

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent to denied for GDPR compliance
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'granted',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 2000
});

gtag('js', new Date());
gtag('config', 'G-QQ8WX2FKGX', {
  'anonymize_ip': true
});