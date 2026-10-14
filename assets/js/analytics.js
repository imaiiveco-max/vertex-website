(function () {
  // ใส่ Measurement ID จาก Google Analytics 4 (รูปแบบ G-XXXXXXXXXX)
  const GA_ID = '';

  if (!GA_ID || !/^G-/i.test(GA_ID)) return;
  if (location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/i.test(location.hostname)) return;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true, send_page_view: true });
})();
