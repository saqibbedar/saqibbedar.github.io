function initImageSkeletons() {
  document.querySelectorAll("[data-img-frame]").forEach((frame) => {
    const img = frame.querySelector("img");
    if (!img) return;

    function markLoaded() {
      frame.classList.add("is-loaded");
    }

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener("load", markLoaded, { once: true });
      img.addEventListener("error", markLoaded, { once: true });
    }
  });
}

document.addEventListener("DOMContentLoaded", initImageSkeletons);
