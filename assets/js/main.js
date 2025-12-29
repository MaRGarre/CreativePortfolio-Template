/**
 * ==========================================================================
 * VANILLA JAVASCRIPT PORTFOLIO
 * Scroll animations using IntersectionObserver
 * ==========================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand the IntersectionObserver API for scroll-based triggers
 * - Learn why IntersectionObserver is better than scroll event listeners
 * - Implement accessible animations with prefers-reduced-motion
 * - Master the observer pattern for performant scroll detection
 *
 * WHAT IS INTERSECTIONOBSERVER?
 * IntersectionObserver is a browser API that efficiently detects when elements
 * enter or leave the viewport (or any ancestor element). It's the modern
 * replacement for scroll event listeners.
 *
 * WHY NOT USE addEventListener('scroll', ...)?
 * - scroll events fire on EVERY PIXEL of scroll (60+ times per second!)
 * - This blocks the main thread and causes "jank" (stuttering)
 * - IntersectionObserver is optimized by the browser, runs asynchronously,
 *   and only fires when intersection state actually changes
 */

// ==========================================================================
// 1. INTERSECTIONOBSERVER CONFIGURATION
// ==========================================================================
const observerOptions = {
  root: null, // Use the browser viewport
  rootMargin: "0px 0px -10% 0px", // Trigger 10% before fully visible
  threshold: 0.1, // Need 10% visibility to trigger
};

/**
 * Single-element reveal callback
 * Adds 'visible' class when element enters viewport
 */
const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add class that triggers CSS transition.
      entry.target.classList.add("visible");

      // PERFORMANCE OPTIMIZATION: Stop observing after reveal
      // Once an element is revealed, we don't need to watch it anymore.
      // This reduces work for the observer and prevents re-triggering.
      observer.unobserve(entry.target);
    }
  });
};

/**
 * Staggered container reveal callback
 */
const revealStaggered = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
};

// Create observer instances
const singleObserver = new IntersectionObserver(
  revealOnScroll,
  observerOptions
);
const staggerObserver = new IntersectionObserver(
  revealStaggered,
  observerOptions
);

// ==========================================================================
// 2. INITIALIZE OBSERVERS
// ==========================================================================
function initScrollAnimations() {
  // Check user's reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Show all content immediately without animations
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("visible");
    });
    document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
      el.classList.add("revealed");
    });
    return;
  }

  // Observe elements for scroll-triggered animations
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    singleObserver.observe(el);
  });

  // Staggered container reveals (e.g., skill grids, project cards)
  document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
    staggerObserver.observe(el);
  });
}

// ==========================================================================
// 3. SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();

        // Calculate scroll position accounting for fixed nav
        const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight;

        // Smooth scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL without reload
        history.pushState(null, "", targetId);
      }
    });
  });
}

// ==========================================================================
// 4. ACTIVE NAVIGATION STATE
// ==========================================================================

/**
 * Highlight active navigation link based on scroll position
 * Uses IntersectionObserver with middle viewport detection
 */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        // Update all nav links: add .active to matching, remove from others
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
            link.setAttribute("aria-current", "true");
          } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, observerOptions);

  // Observe all sections with IDs
  sections.forEach((section) => navObserver.observe(section));
}

// ==========================================================================
// 5. CARD LIGHTBOX MODAL
// ==========================================================================

/**
 * Lightbox modal for viewing card images
 * Opens on click, closes on overlay click or Escape key
 */
function initCardLightbox() {
  let modal = document.createElement("div");
  modal.className = "lightbox-modal hidden";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = '<img alt="" />';
  document.body.appendChild(modal);

  function openLightbox(imgSrc, imgAlt) {
    const img = modal.querySelector("img");
    img.src = imgSrc;
    img.alt = imgAlt || "";
    modal.classList.remove("hidden");
    modal.focus();
  }

  function closeLightbox() {
    modal.classList.add("hidden");
    modal.querySelector("img").src = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Attach click handlers to cards
  document.querySelectorAll(".card").forEach((card) => {
    const img = card.querySelector(".card-front img");
    if (!img) return;
    card.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openLightbox(img.src, img.alt);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(img.src, img.alt);
      }
    });

    card.style.cursor = "zoom-in";
  });
}

// ==========================================================================
// 6. PROJECT FILTERING
// ==========================================================================
function initProjectFilters() {
  const filterBar = document.querySelector(".projects-filters");
  if (!filterBar) return;

  const buttons = Array.from(filterBar.querySelectorAll(".filter-btn"));
  const cards = Array.from(document.querySelectorAll(".project-card"));

  function setActiveButton(activeBtn) {
    buttons.forEach((btn) => {
      const isActive = btn === activeBtn;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function applyFilter(filter) {
    cards.forEach((card) => {
      const category = (card.dataset.category || "all").toLowerCase();
      const target = (filter || "all").toLowerCase();
      const shouldShow = target === "all" || category === target;
      card.style.display = shouldShow ? "" : "none";
    });
  }

  // Click and keyboard handlers
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter || "all";
      setActiveButton(btn);
      applyFilter(filter);
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = buttons[(index + 1) % buttons.length];
        next.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = buttons[(index - 1 + buttons.length) % buttons.length];
        prev.focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Initialize to the default active button (aria-pressed="true") or first
  const defaultBtn =
    buttons.find((b) => b.getAttribute("aria-pressed") === "true") ||
    buttons[0];
  if (defaultBtn) {
    setActiveButton(defaultBtn);
    applyFilter(defaultBtn.dataset.filter || "all");
  }
}

// ==========================================================================
// 7. INITIALIZATION
// ==========================================================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initSmoothScroll();
  initActiveNav();
  initCardLightbox();
  initProjectFilters();

  console.log("Portfolio initialized");
});

// ==========================================================================
// 8. CLEANUP (FOR SPA ENVIRONMENTS)
// ==========================================================================

/**
 * Cleanup observers for SPA environments
 */
window.cleanupScrollObservers = () => {
  singleObserver.disconnect();
  staggerObserver.disconnect();
};

// ==========================================================================
// 9. MOUSE TRAIL EFFECT
// ==========================================================================

const canvas = document.getElementById("trailCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let points = [];
const maxTrail = 30;
let lastMove = performance.now();
const trailIdleTimeout = 100; // ms of inactivity before starting fade
const trailFadeDuration = 250; // ms duration of fade to fully vanish

window.addEventListener("mousemove", (e) => {
  lastMove = performance.now();
  points.push({ x: e.clientX, y: e.clientY });

  if (points.length > maxTrail) {
    points.shift();
  }
});

function draw() {
  requestAnimationFrame(draw);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (points.length < 2) return;

  const now = performance.now();
  const idle = now - lastMove;

  let fadeProgress = 0;
  if (idle > trailIdleTimeout) {
    fadeProgress = Math.min((idle - trailIdleTimeout) / trailFadeDuration, 1);
  }

  if (fadeProgress >= 1) {
    points = [];
    return;
  }

  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  for (let i = 1; i < points.length; i++) {
    const p1 = points[i - 1];
    const p2 = points[i];

    const baseAlpha = i / points.length;
    const alpha = baseAlpha * (1 - fadeProgress);

    ctx.strokeStyle = `rgba(255, 0, 0, ${alpha})`;

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
}

draw();
