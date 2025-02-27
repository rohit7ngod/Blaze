document.addEventListener("DOMContentLoaded", function () {
  // --- Menu Overlay Functionality ---
  const viewMenuBtn = document.getElementById("viewMenuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const navButtons = document.querySelectorAll(".nav-btn");
  const menuImage = document.getElementById("menuImage");

  // Open the menu overlay when the "View Menu" button is clicked
  viewMenuBtn.addEventListener("click", function () {
    menuOverlay.style.display = "flex";
    // By default, ensure Gourmet Burgers is active
    activateNavButton(document.querySelector('.nav-btn[data-src="GOURMET BURGERS.svg"]'));
  });

  // Close the menu overlay when the close button is clicked
  document.getElementById("closeMenuBtn").addEventListener("click", function () {
    menuOverlay.style.display = "none";
  });

  // Close the menu if clicking outside the content area
  menuOverlay.addEventListener("click", function (e) {
    if (e.target === menuOverlay) {
      menuOverlay.style.display = "none";
    }
  });

  // Helper to activate a nav button
  function activateNavButton(button) {
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    // Update menu image source
    menuImage.src = button.getAttribute("data-src");
  }

  // Add click events to nav buttons to switch menu pages
  navButtons.forEach(button => {
    button.addEventListener("click", function () {
      activateNavButton(button);
    });
  });
});
