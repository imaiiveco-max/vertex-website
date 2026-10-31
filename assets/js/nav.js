const nv = document.querySelector('#nv');
const nl = document.querySelector('#nl');
const mb = document.querySelector('#mb');
if (nv) addEventListener('scroll', () => nv.classList.toggle('s', scrollY > 20), { passive: true });
if (mb && nl) mb.onclick = () => nl.classList.toggle('o');
if (nl) {
  nl.addEventListener('click', e => {
    if (e.target.closest('.nd')) return;
    nl.classList.remove('o');
  });
}
document.querySelectorAll('.nd').forEach(nd => {
  const btn = nd.querySelector('.nd-t');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = nd.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.querySelectorAll('.nd').forEach(o => {
      if (o !== nd) {
        o.classList.remove('open');
        o.querySelector('.nd-t')?.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
addEventListener('click', () => {
  document.querySelectorAll('.nd').forEach(nd => {
    nd.classList.remove('open');
    nd.querySelector('.nd-t')?.setAttribute('aria-expanded', 'false');
  });
});
