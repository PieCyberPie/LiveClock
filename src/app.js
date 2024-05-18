"use strict";

const themeButton = document.querySelector(".theme-switcher");
const container = document.querySelector(".container");
const time = document.querySelector(".time");
time.innerHTML = new Date().toLocaleTimeString();

function updateTime() {
  if (time) {
    time.innerHTML = new Date().toLocaleTimeString();
  }
}

setInterval(updateTime, 1000);

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("dark-theme--button");
  time.classList.toggle("dark-theme--time");
  container.classList.toggle("dark-theme--container");
});
