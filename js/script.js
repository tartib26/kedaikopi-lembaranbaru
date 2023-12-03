// Toggle class active
// const navbarNav = document.querySelector(".navbar-nav");

// // hamburger menu diKlik
// document.querySelector("#hamburger-menu").onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// // Klik hilangkan Nav
// const hamburger = document.querySelector("#hamburger-menu");
// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// hamburger menu diKlik
hamburger.onclick = (event) => {
  event.preventDefault(); // Mencegah perilaku default dari tautan
  navbarNav.classList.toggle("active");
};

// Klik hilangkan Nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
