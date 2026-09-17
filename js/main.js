/**
 * Comunicación Asertiva — script principal
 * Se incluye en todas las páginas del sitio.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  markActiveNavLink();
  initModals();
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
 * Controla la apertura y cierre de las ventanas modales
 * (por ejemplo, la respuesta del reto de cada integrante).
 * Se abren con un botón [data-modal-target="ID"] que apunta
 * a un contenedor con id="modal-ID", y se cierran con el
 * botón [data-modal-close], haciendo clic afuera del panel,
 * o presionando la tecla Escape.
 */
function initModals() {
  const openButtons = document.querySelectorAll("[data-modal-target]");
  if (!openButtons.length) return;

  const closeModal = (modal) => {
    modal.classList.add("closed");
  };

  openButtons.forEach((btn) => {
    const modal = document.getElementById(`modal-${btn.dataset.modalTarget}`);
    if (!modal) return;

    btn.addEventListener("click", () => {
      modal.classList.remove("closed");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });

    modal.querySelectorAll("[data-modal-close]").forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => closeModal(modal));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".modal-overlay:not(.closed)").forEach(closeModal);
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