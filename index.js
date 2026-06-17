/* ==========================================================================
   CHEENI KUM — script.js
   Vanilla JS: navbar, mobile menu, scroll animations, filters,
   lightbox gallery, reviews carousel, custom cake form -> WhatsApp.
   ========================================================================== */

// ---- Replace this with your real WhatsApp business number (country code + number, no + or spaces) ----
const WHATSAPP_NUMBER = "919876543210";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initProductFilters();
  initGalleryAndLightbox();
  initReviewsCarousel();
  initCakeForm();
  initBackToTop();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* --------------------------- Sticky navbar -------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = () => {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* --------------------------- Mobile hamburger menu ------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* --------------------------- Fade-in on scroll ----------------------------- */
function initScrollAnimations() {
  const sections = document.querySelectorAll(".fade-in-section");
  if (!("IntersectionObserver" in window)) {
    sections.forEach((s) => s.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

/* --------------------------- Product category filters ---------------------- */
function initProductFilters() {
  const filterWrap = document.getElementById("productFilters");
  const cards = document.querySelectorAll("#productGrid .product-card");
  if (!filterWrap) return;

  filterWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
    });
  });
}

/* --------------------------- Gallery filters + lightbox -------------------- */
function initGalleryAndLightbox() {
  const filterWrap = document.getElementById("galleryFilters");
  const items = Array.from(document.querySelectorAll("#galleryGrid .gallery-item"));

  if (filterWrap) {
    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      items.forEach((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hidden", !match);
      });
    });
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let currentIndex = 0;

  function visibleItems() {
    return items.filter((item) => !item.classList.contains("hidden"));
  }

  function openLightbox(index) {
    const visible = visibleItems();
    if (!visible.length) return;
    currentIndex = index;
    const img = visible[currentIndex].querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showRelative(step) {
    const visible = visibleItems();
    if (!visible.length) return;
    currentIndex = (currentIndex + step + visible.length) % visible.length;
    const img = visible[currentIndex].querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  items.forEach((item, idx) => {
    item.addEventListener("click", () => openLightbox(visibleItems().indexOf(item)));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => showRelative(-1));
  nextBtn.addEventListener("click", () => showRelative(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });
}

/* --------------------------- Reviews carousel ------------------------------- */
function initReviewsCarousel() {
  const track = document.getElementById("reviewsTrack");
  const prev = document.getElementById("reviewPrev");
  const next = document.getElementById("reviewNext");
  if (!track) return;

  const scrollByCard = (dir) => {
    const card = track.querySelector(".review-card");
    if (!card) return;
    const gap = 26;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));

  // Gentle auto-scroll, pausing on hover/touch
  let autoTimer = setInterval(() => {
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
    else scrollByCard(1);
  }, 4500);

  const pause = () => clearInterval(autoTimer);
  const resume = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else scrollByCard(1);
    }, 4500);
  };
  track.addEventListener("mouseenter", pause);
  track.addEventListener("mouseleave", resume);
  track.addEventListener("touchstart", pause, { passive: true });
}

/* --------------------------- Custom cake form -> WhatsApp ------------------- */
function initCakeForm() {
  const form = document.getElementById("cakeForm");
  const successBox = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const flavor = form.flavor.value;
    const weight = form.weight.value;
    const message = form.message.value.trim() || "—";

    const formattedDate = date
      ? new Date(date + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
      : "—";

    const text =
      `Hi Cheeni Kum! I'd like to enquire about a custom cake.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Event Date:* ${formattedDate}\n` +
      `*Flavor:* ${flavor}\n` +
      `*Weight:* ${weight}\n` +
      `*Message on Cake:* ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    successBox.classList.add("visible");
    window.open(url, "_blank", "noopener");

    setTimeout(() => {
      form.reset();
      successBox.classList.remove("visible");
    }, 6000);
  });
}

/* --------------------------- Back to top button ------------------------------ */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  const toggle = () => btn.classList.toggle("visible", window.scrollY > 600);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}