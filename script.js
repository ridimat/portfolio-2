// Dark Mode Toggle Script
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleIcon = document.getElementById("theme-toggle-icon"); // Desktop icon
  const mobileThemeToggleIcon = document.getElementById("mobile-theme-toggle-icon"); // Mobile icon

  if (!themeToggleIcon || !mobileThemeToggleIcon) {
    console.error("Dark mode toggle icons not found.");
    return;
  }

  // Check local storage for theme preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    // Change the icon to a moon if dark mode is enabled
    themeToggleIcon.src = "./assets/darklight.png";
    mobileThemeToggleIcon.src = "./assets/darklight.png";
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Update the icon based on the current theme
    const isDarkMode = document.body.classList.contains("dark-mode");
    const newIconSrc = isDarkMode ? "./assets/darklight.png" : "./assets/darklight.png";
    themeToggleIcon.src = newIconSrc;
    mobileThemeToggleIcon.src = newIconSrc;

    // Save the theme preference to local storage
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
  }

  // Add event listeners for desktop and mobile icons
  themeToggleIcon.addEventListener("click", toggleDarkMode);
  mobileThemeToggleIcon.addEventListener("click", toggleDarkMode);
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");

  if (hamburger && menuLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      menuLinks.classList.toggle("open");
    });
  }
});

