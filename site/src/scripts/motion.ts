/*
  Calm motion layer:
  - Lenis smooth scroll (skipped for prefers-reduced-motion).
  - Scroll reveals for [data-reveal] (stagger via --i).
  - Header: transparent over the hero → solid forest bar; hides on scroll down, returns on scroll up.
  - Gentle parallax for [data-parallax] (value = fraction of scroll distance).
  - Disclosures: nav dropdowns, mobile menu and FAQ accordion.
*/
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------------- Smooth scroll ---------------- */
let lenis: Lenis | null = null;

if (!reduceMotion.matches) {
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

/* ---------------- Ambient video (leaf shadows) ---------------- */
// Respect reduced motion, and pause off-screen to save battery.
document.querySelectorAll<HTMLVideoElement>('[data-ambient-video]').forEach((video) => {
  if (reduceMotion.matches) {
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }
  const offset = Number(video.dataset.offset) || 0;
  if (offset) {
    const seek = () => { try { video.currentTime = offset; } catch {} };
    if (video.readyState >= 1) seek();
    else video.addEventListener('loadedmetadata', seek, { once: true });
  }
  if (!('IntersectionObserver' in window)) return;
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) video.play().catch(() => {});
    else video.pause();
  }).observe(video);
});

/* ---------------- Hero entrance (+ preloader) ---------------- */
const markLoaded = () => requestAnimationFrame(() => root.classList.add('is-loaded'));
const heroImg = document.querySelector<HTMLImageElement>('.hero-media img');
const heroReady = new Promise<void>((resolve) => {
  if (!heroImg || heroImg.complete) return resolve();
  heroImg.addEventListener('load', () => resolve(), { once: true });
  heroImg.addEventListener('error', () => resolve(), { once: true });
});
const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

const preloader = document.querySelector<HTMLElement>('[data-preloader]');
if (preloader && !root.classList.contains('no-preloader')) {
  lenis?.stop();
  requestAnimationFrame(() => requestAnimationFrame(() => preloader.classList.add('is-in')));
  // Hold at least long enough for the mark to settle; never longer than ~3s.
  Promise.all([wait(1300), Promise.race([heroReady, wait(3000)])]).then(async () => {
    preloader.classList.add('is-out');
    await wait(450);
    markLoaded();
    await wait(1150);
    preloader.remove();
    lenis?.start();
    try {
      sessionStorage.setItem('tgm-preloader', '1');
    } catch {}
  });
} else {
  preloader?.remove();
  Promise.race([heroReady, wait(1200)]).then(markLoaded);
}

/* ---------------- Scroll reveals ---------------- */
const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

/* ---------------- Header + parallax (one scroll loop) ---------------- */
const header = document.querySelector<HTMLElement>('[data-site-header]');
const topBar = document.querySelector<HTMLElement>('[data-top-bar]');
const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const growEls = Array.from(document.querySelectorAll<HTMLElement>('[data-grow]'));
const heroZoom = document.querySelector<HTMLElement>('[data-hero-zoom]');
const heroContent = document.querySelector<HTMLElement>('[data-hero-content]');
let lastY = window.scrollY;
let ticking = false;

const update = () => {
  ticking = false;
  const y = window.scrollY;
  const topBarH = topBar && topBar.offsetParent !== null ? topBar.offsetHeight : 0;

  if (header) {
    // Sit under the top bar at the very top, then pin to the viewport.
    header.style.top = `${Math.max(0, topBarH - y)}px`;
    const solid = y > topBarH + 24;
    header.classList.toggle('is-solid', solid);
    const menuOpen = header.classList.contains('menu-open');
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (!menuOpen && goingDown && y > 560) header.classList.add('is-hidden');
    else if (goingUp || y <= 560 || menuOpen) header.classList.remove('is-hidden');
  }

  if (!reduceMotion.matches) {
    const vh = window.innerHeight;
    const isMd = window.innerWidth >= 768;
    // Grow sections: inset rounded card → full bleed while the section enters the viewport.
    for (const el of growEls) {
      if (!isMd) {
        el.style.clipPath = '';
        continue;
      }
      const r = el.parentElement!.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.85)));
      const e = 1 - Math.pow(1 - p, 3);
      const ix = (window.innerWidth >= 1024 ? 64 : 16) * (1 - e);
      const iy = (window.innerWidth >= 1024 ? 40 : 16) * (1 - e);
      el.style.clipPath = `inset(${iy.toFixed(1)}px ${ix.toFixed(1)}px round ${(40 * (1 - e)).toFixed(1)}px)`;
    }
    // Hero: photo zooms in and copy drifts up/fades as the hero scrolls away.
    if (heroZoom && heroContent && !isMd) {
      heroZoom.style.transform = '';
      heroContent.style.transform = '';
      heroContent.style.opacity = '';
    } else if (heroZoom && heroContent) {
      const p = Math.min(1, Math.max(0, y / (heroZoom.parentElement?.offsetHeight || vh)));
      if (p < 1) {
        const eased = 1 - Math.pow(1 - p, 2);
        heroZoom.style.transform = `scale(${(1 + eased * 0.15).toFixed(4)})`;
        heroContent.style.transform = `translate3d(0, ${(-p * 64).toFixed(1)}px, 0)`;
        heroContent.style.opacity = (1 - p * 0.7).toFixed(3);
      }
    }
    for (const el of parallaxEls) {
      // Stacked layouts (mobile) skip parallax where it would only cause overlap.
      if (el.dataset.parallaxMin === 'md' && !isMd) {
        el.style.transform = '';
        continue;
      }
      const speed = Number(el.dataset.parallax) || 0.08;
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect || rect.bottom < -200 || rect.top > vh + 200) continue;
      const progress = rect.top + rect.height / 2 - vh / 2;
      // Clamp so the image never travels past its 64px bleed (see .parallax-bleed users).
      const shift = Math.max(-48, Math.min(48, -progress * speed));
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    }
  }
  // Safety net: content near the page end may never cross the reveal line on tall screens.
  if (y + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
  lastY = y;
};

const requestUpdate = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(update);
};

if (lenis) lenis.on('scroll', requestUpdate);
else window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
update();

/* ---------------- Disclosure helper ---------------- */
const setOpen = (trigger: HTMLElement, panel: HTMLElement, open: boolean) => {
  trigger.setAttribute('aria-expanded', String(open));
  panel.classList.toggle('is-open', open);
  if (open) panel.removeAttribute('inert');
  else panel.setAttribute('inert', '');
};

/* Nav dropdowns: desktop = hover intent + click + keyboard; mobile menu = tap accordions */
document.querySelectorAll<HTMLElement>('[data-dropdown]').forEach((wrap) => {
  const trigger = wrap.querySelector<HTMLElement>('[data-dropdown-trigger]');
  const panel = wrap.querySelector<HTMLElement>('[data-dropdown-panel]');
  if (!trigger || !panel) return;
  let closeTimer = 0;
  // Mobile menu accordions open on tap only (no hover-intent).
  const hoverable = !wrap.closest('[data-menu-panel]');
  const open = () => {
    window.clearTimeout(closeTimer);
    document.querySelectorAll<HTMLElement>('[data-dropdown]').forEach((other) => {
      if (other === wrap) return;
      const t = other.querySelector<HTMLElement>('[data-dropdown-trigger]');
      const p = other.querySelector<HTMLElement>('[data-dropdown-panel]');
      if (t && p) setOpen(t, p, false);
    });
    setOpen(trigger, panel, true);
  };
  const close = () => {
    closeTimer = window.setTimeout(() => setOpen(trigger, panel, false), 160);
  };
  wrap.addEventListener('pointerenter', (e) => {
    if (hoverable && (e as PointerEvent).pointerType === 'mouse') open();
  });
  wrap.addEventListener('pointerleave', (e) => {
    if (hoverable && (e as PointerEvent).pointerType === 'mouse') close();
  });
  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    if (isOpen) setOpen(trigger, panel, false);
    else open();
  });
  wrap.addEventListener('focusout', (e) => {
    if (hoverable && !wrap.contains(e.relatedTarget as Node)) setOpen(trigger, panel, false);
  });
  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(trigger, panel, false);
      trigger.focus();
    }
  });
});

/* Mobile menu */
const menuButton = document.querySelector<HTMLElement>('[data-menu-trigger]');
const menuPanel = document.querySelector<HTMLElement>('[data-menu-panel]');
if (menuButton && menuPanel && header) {
  const toggleMenu = (open: boolean) => {
    setOpen(menuButton, menuPanel, open);
    header.classList.toggle('menu-open', open);
    header.classList.toggle('is-solid', open || window.scrollY > 72);
    if (open) lenis?.stop();
    else lenis?.start();
  };
  menuButton.addEventListener('click', () => toggleMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  menuPanel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 80rem)').addEventListener('change', (e) => {
    if (e.matches) toggleMenu(false);
  });
}

/* FAQ accordion: one item open at a time, smooth height via grid rows */
document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((group) => {
  const items = Array.from(group.querySelectorAll<HTMLElement>('[data-accordion-item]'));
  items.forEach((item) => {
    const trigger = item.querySelector<HTMLElement>('[data-accordion-trigger]');
    const panel = item.querySelector<HTMLElement>('[data-accordion-panel]');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', () => {
      const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
      items.forEach((other) => {
        const t = other.querySelector<HTMLElement>('[data-accordion-trigger]');
        const p = other.querySelector<HTMLElement>('[data-accordion-panel]');
        if (t && p) setOpen(t, p, false);
        other.classList.remove('is-open');
      });
      setOpen(trigger, panel, willOpen);
      item.classList.toggle('is-open', willOpen);
      // Let Lenis recompute the page height after the panel settles.
      window.setTimeout(() => lenis?.resize(), 650);
    });
  });
});

/* Prototype links ("#") stay put instead of jumping to the top of the page. */
document.addEventListener('click', (e) => {
  const a = (e.target as Element | null)?.closest?.('a[href="#"]');
  if (a) e.preventDefault();
});

