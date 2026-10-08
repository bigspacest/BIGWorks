(function () {
  "use strict";

  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Tema persistente
  const saved = localStorage.getItem("bigworks-theme");
  if (saved === "light") {
    body.classList.replace("theme-dark", "theme-light");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.contains("theme-dark");
      body.classList.toggle("theme-dark", !isDark);
      body.classList.toggle("theme-light", isDark);
      localStorage.setItem("bigworks-theme", isDark ? "light" : "dark");
    });
  }

  // Seguridad básica
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });
})();
