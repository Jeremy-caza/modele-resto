document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const menuLists = document.querySelectorAll(".menu-list");

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Supprimer les classes 'active' actuelles
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      menuLists.forEach(list => list.classList.remove("active"));

      // Activer la bonne catégorie
      button.classList.add("active");
      const target = button.getAttribute("data-category");
      const activeMenu = document.getElementById(target);
      if (activeMenu) {
        activeMenu.classList.add("active");
      }
    });
  });
});
