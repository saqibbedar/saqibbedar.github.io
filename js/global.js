const root = document.documentElement;
const body = document.body;

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      theme === "dark" ? "#0d0d0d" : "#ffffff"
    );
  }
}

window.toggleTheme = function () {
  const currentTheme = root.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
};

function initThemeToggle() {
  const themeToggle = document.querySelector("[data-theme-toggle]");

  if (!themeToggle) return;

  themeToggle.addEventListener("click", window.toggleTheme);
}

function initMobileMenu() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (!menuToggle || !mobileMenu) return;

  function closeMenu() {
    body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  function toggleMenu() {
    const isOpen = body.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  menuToggle.addEventListener("click", toggleMenu);

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
}

function setCurrentYear() {
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function initAvatarOnScroll() {
  const avatar = document.querySelector(".brand-avatar");

  if (!avatar) return;

  function updateAvatar() {
    avatar.classList.toggle("show-on-scroll", window.scrollY > 36);
  }

  updateAvatar();

  window.addEventListener("scroll", updateAvatar, {
    passive: true,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());
  initThemeToggle();
  initMobileMenu();
  setCurrentYear();
  initAvatarOnScroll();
});
