// Przyciski:
let openBtn = document.querySelector(".open-mobile-menu");
let closeBtn = document.querySelector(".close-mobile-menu");
// Ogarnąć jak działa querySelectorAll i zrobić to ewentualnie ręcznie dla każdego elementu!!!
let headerOptions = document.querySelectorAll(".header-option");

let headerList = document.querySelector(".header-list");
let openHeader = document.getElementById("open-header");
let headerLogo = document.getElementById("header-logo");
let computerSettings = document.querySelector(".computer-settings");
// Funkcja do otwierania
const openWindow = () => {
  closeBtn.classList.remove("inactive");
  openBtn.classList.add("inactive");
  openHeader.classList.add("open");
  headerList.classList.remove("inactive");
  headerLogo.classList.add("inactive");
  computerSettings.classList.add("inactive");
};
// Funkcja do zamykania
const closeWindow = () => {
  closeBtn.classList.add("inactive");
  openBtn.classList.remove("inactive");
  openHeader.classList.remove("open");
  headerList.classList.add("inactive");
  headerLogo.classList.remove("inactive");
  computerSettings.classList.remove("inactive");
};

// Przycisk żeby otworzyć
openBtn.addEventListener("click", openWindow);
// Przycisk żeby zamknąć
closeBtn.addEventListener("click", closeWindow);
// Elementy nawigacji
headerOptions.forEach((element) => {
  element.addEventListener("click", closeWindow);
});
