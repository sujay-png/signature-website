// Header scroll state + mobile menu

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector<HTMLButtonElement>('.mobile-menu-toggle');
  const drawer = document.querySelector<HTMLElement>('.mobile-menu-drawer');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!toggle || !drawer) return;

  const setOpen = (open: boolean) => {
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => m.matches && setOpen(false));
}
