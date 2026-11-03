/* Progressive enhancements shared by every page. Tiny on purpose. */

// Fade-and-rise once when entering the viewport.
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && revealables.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}

// Copy helper: any [data-copy] button copies its value or a target's text.
async function copy(text: string, btn: HTMLElement) {
  try {
    await navigator.clipboard.writeText(text);
    const label = btn.querySelector<HTMLElement>('[data-copy-label]') ?? btn;
    const original = label.textContent;
    btn.setAttribute('data-copied', '');
    label.textContent = btn.dataset.copiedLabel ?? 'Copied';
    setTimeout(() => {
      btn.removeAttribute('data-copied');
      label.textContent = original;
    }, 1600);
  } catch {
    /* clipboard blocked: leave the button as-is */
  }
}

document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-copy]');
  if (!btn) return;
  const sel = btn.dataset.copyTarget;
  const text = sel ? document.querySelector(sel)?.textContent ?? '' : btn.dataset.copy ?? '';
  if (text) copy(text.trim(), btn);
});

// Code blocks: wrap Shiki <pre> with a language label and a copy button.
const lang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
const labels = { en: ['Copy', 'Copied'], pt: ['Copiar', 'Copiado'] }[lang];
document.querySelectorAll<HTMLPreElement>('pre.astro-code').forEach((pre, i) => {
  if (pre.parentElement?.classList.contains('code-block') || pre.closest('[data-no-auto-copy]')) return;
  const wrap = document.createElement('div');
  wrap.className = 'code-block';
  const l = pre.dataset.language;
  if (l && l !== 'plaintext') wrap.dataset.lang = l;
  pre.parentNode?.insertBefore(wrap, pre);
  wrap.appendChild(pre);
  pre.id ||= `code-${i}`;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy-btn';
  btn.dataset.copy = '';
  btn.dataset.copyTarget = `#${pre.id} code`;
  btn.dataset.copiedLabel = labels[1];
  btn.innerHTML = `<span data-copy-label>${labels[0]}</span>`;
  wrap.appendChild(btn);
});
