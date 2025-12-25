const hamburger = document.querySelector(".bars-wrapper");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".mobile-menu a");

// Toggle menu open / close
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when close button is clicked
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  hamburger.classList.remove("active");
});

// Auto close menu when any link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
