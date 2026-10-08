(function () {
  "use strict";

  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const yearEl = document.getElementById("year");

  // Año dinámico
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Preferencia guardada o sistema
  const saved = localStorage.getItem("bigworks-theme");
  if (saved === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  } else if (saved === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  }

  // Toggle
  if (toggle) {
    toggle.addEventListener("click", function () {
      const isDark = body.classList.contains("theme-dark");
      body.classList.toggle("theme-dark", !isDark);
      body.classList.toggle("theme-light", isDark);
      localStorage.setItem("bigworks-theme", isDark ? "light" : "dark");
    });
  }

  // Seguridad básica: deshabilitar click derecho y selección en banner
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Protección ligera contra drag de imágenes (si se agregan después)
  document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });
})();
