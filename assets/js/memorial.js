(function () {
  /** เปิด/ปิดและแก้เนื้อหาได้ที่นี่ */
  const MEMORIAL = {
    enabled: false,
    showUntil: '2026-12-31',
    storageKey: 'vertex_memorial_seen_v2',
    rememberForHours: 24,
    title: 'น้อมรำลึกในพระกรุณาธิคุณ',
    message:
      'ด้วยสำนึกในพระกรุณาธิคุณเป็นล้นพ้น\nคณะผู้บริหารและพนักงาน Vertex Infrastructure Co., Ltd.\nขอน้อมสำนึกและขอแสดงความเสียใจอย่างสุดซึ้ง',
    image: 'assets/images/memorial-portrait.jpg',
    imageAlt: 'ภาพไว้อาลัย',
    enterLabel: 'เข้าสู่เว็บไซต์',
    grayscaleSiteAfterEnter: true,
  };

  if (!MEMORIAL.enabled) return;
  if (MEMORIAL.showUntil && Date.now() > Date.parse(MEMORIAL.showUntil + 'T23:59:59')) return;

  try {
    const raw = localStorage.getItem(MEMORIAL.storageKey);
    if (raw) {
      const t = JSON.parse(raw);
      if (t.until && Date.now() < t.until) {
        if (MEMORIAL.grayscaleSiteAfterEnter) document.documentElement.classList.add('memorial-tone');
        return;
      }
    }
  } catch (_) {}

  const root = document.createElement('div');
  root.id = 'memorial';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-labelledby', 'memorial-title');
  root.innerHTML = `
<div class="memorial-panel">
${MEMORIAL.image ? `<img class="memorial-img" src="${MEMORIAL.image}" alt="${MEMORIAL.imageAlt || ''}">` : ''}
<p class="memorial-eb">IN MEMORIAM</p>
<h1 id="memorial-title">${MEMORIAL.title}</h1>
<p class="memorial-msg">${MEMORIAL.message.replace(/\n/g, '<br>')}</p>
<button type="button" class="btn p memorial-enter">${MEMORIAL.enterLabel}</button>
</div>`;

  document.body.appendChild(root);
  document.body.classList.add('memorial-lock');

  const btn = root.querySelector('.memorial-enter');
  btn.focus();

  function close() {
    root.remove();
    document.body.classList.remove('memorial-lock');
    const until = Date.now() + MEMORIAL.rememberForHours * 3600 * 1000;
    try {
      localStorage.setItem(MEMORIAL.storageKey, JSON.stringify({ until }));
    } catch (_) {}
    if (MEMORIAL.grayscaleSiteAfterEnter) document.documentElement.classList.add('memorial-tone');
  }

  btn.addEventListener('click', close);
})();
