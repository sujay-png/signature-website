// Interactive Gallery & Lightbox Handler

export function initGallery() {
  const modal = document.querySelector('.lightbox-modal') as HTMLElement | null;
  const modalImg = document.querySelector('.lightbox-img') as HTMLImageElement | null;
  const modalCaption = document.querySelector('.lightbox-caption') as HTMLElement | null;
  const closeBtn = document.querySelector('.lightbox-close') as HTMLElement | null;

  if (!modal || !modalImg || !modalCaption) return;

  const triggers = document.querySelectorAll('[data-lightbox]');
  let lastFocus: HTMLElement | null = null;
  const galleryItems: { src: string; caption: string }[] = [];

  triggers.forEach((trigger, idx) => {
    const src = trigger.getAttribute('data-lightbox-src') || (trigger as HTMLImageElement).src;
    const caption = trigger.getAttribute('data-lightbox-caption') || trigger.getAttribute('alt') || '';
    galleryItems.push({ src, caption });

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(src, caption);
    });
    if (!(trigger instanceof HTMLButtonElement) && !(trigger instanceof HTMLAnchorElement)) {
      if (!trigger.hasAttribute('tabindex')) trigger.setAttribute('tabindex', '0');
      if (!trigger.hasAttribute('role')) trigger.setAttribute('role', 'button');
      if (!trigger.hasAttribute('aria-label')) trigger.setAttribute('aria-label', `Enlarge image: ${caption}`);
      trigger.addEventListener('keydown', (e) => {
        const k = (e as KeyboardEvent).key;
        if (k === 'Enter' || k === ' ') { e.preventDefault(); openLightbox(src, caption); }
      });
    }
  });

  function openLightbox(src: string, caption: string) {
    if (!modal || !modalImg || !modalCaption) return;
    modalImg.src = src;
    modalCaption.textContent = caption;
    lastFocus = document.activeElement as HTMLElement | null;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    lastFocus?.focus();
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });

  // Global helper to open lightbox from anywhere
  (window as unknown as { openLightboxModal?: (src: string, caption: string) => void }).openLightboxModal = openLightbox;
}
