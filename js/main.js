/**
 * Comunicación Asertiva — script principal
 * Se incluye en todas las páginas del sitio.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  markActiveNavLink();
});

/**
 * Abre/cierra el menú en pantallas pequeñas.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    menu.classList.toggle("open", !isOpen);
    menu.classList.toggle("closed", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));
  });
}

/**
 * Marca como "activo" el enlace del menú que corresponde
 * a la página actual, comparando el atributo data-page.
 */
function markActiveNavLink() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === currentPage) {
      link.classList.add("active");
    }
  });
}
