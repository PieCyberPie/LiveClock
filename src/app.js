"use strict";

const themeButton = document.querySelector(".theme-switcher");
const container = document.querySelector(".container");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const body = document.querySelector(".page");

time.innerHTML = new Date().toLocaleTimeString();
day.innerHTML = new Date().toLocaleDateString();

function updateTime() {
  if (time) {
    time.innerHTML = new Date().toLocaleTimeString();
  }
}

function updateDay() {
  if (day) {
    day.innerHTML = new Date().toLocaleDateString();
  }
}

setInterval(updateTime, 1000);
setInterval(updateDay, 1000);

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("dark-theme");
  time.classList.toggle("dark-theme");
  day.classList.toggle("dark-theme");
  body.classList.toggle("dark-theme");
});

body.addEventListener("dblclick", (event) => {
  event.preventDefault();
  themeButton.classList.toggle("invisible");
});

window.alert("Double click or double tap to turn off switcher");
