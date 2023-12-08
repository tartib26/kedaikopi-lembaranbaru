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
const navLinks = document.querySelectorAll(".navbar-nav a");

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

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navbarNav.classList.remove("active");
  });
});
//Aktifkan Search Form
const searchForm = document.querySelector(".search-form");
const tombolSearch = document.querySelector("#search");

tombolSearch.onclick = (event) => {
  event.preventDefault();
  searchForm.classList.toggle("active");
};

// Hilangkan Search Form
document.addEventListener("click", function (e) {
  if (!tombolSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Aktifkan Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
const keranjang = document.querySelector("#keranjang");

keranjang.onclick = (event) => {
  event.preventDefault();
  shoppingCart.classList.toggle("active");
};

// Hilangkan Shopping Cart
document.addEventListener("click", function (e) {
  if (!keranjang.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const tombolDetail = document.querySelectorAll(".item-detail-button");

tombolDetail.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

const closeModal = document.querySelector(".close-icon");
closeModal.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
