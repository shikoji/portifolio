document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("nav button");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach((section) => {
      section.classList.remove("active");
      if (section.id === pageId) {
        section.classList.add("active");
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-page");
      showPage(target);
      history.pushState(null, "", `#${target}`);
    });
  });

  const hash = window.location.hash.replace("#", "") || "home";
  showPage(hash);

  // NOVO: SPA funcionando com os links do hamburguer também
  const hamburgerLinks = document.querySelectorAll(".navigation a");
  const hamburgerCheckbox = document.getElementById("toggleCheck");

  hamburgerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      showPage(targetId);
      history.pushState(null, "", `#${targetId}`);
      hamburgerCheckbox.checked = false; // Fecha o menu
    });
  });
});

