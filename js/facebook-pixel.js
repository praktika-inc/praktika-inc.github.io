// Facebook Pixel - Consent Controlled Loading
// This script defines the function to load Facebook Pixel when consent is granted

window.fbqLoaded = false;

function loadFacebookPixel() {
  if (window.fbqLoaded) return;
  
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  fbq('init', '276771194920464');
  
  // Set proper domain for cookies
  fbq('set', 'autoConfig', false, '276771194920464');
  
  fbq('track', 'PageView');
  
  window.fbqLoaded = true;
}