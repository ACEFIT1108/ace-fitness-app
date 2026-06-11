const header = document.querySelector(".site-header");
const mobileCta = document.querySelector(".mobile-cta");

function updateScrollState() {
  const isScrolled = window.scrollY > 8;
  header.classList.toggle("is-scrolled", isScrolled);
  mobileCta?.classList.toggle("is-visible", window.scrollY > 520);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();
