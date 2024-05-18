"use strict";

const themeButton = document.querySelector(".theme-switcher");
const container = document.querySelector(".container");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const body = document.querySelector(".page");
const alarmWindow = document.querySelector(".alarm-window");
const alarmWindowText = document.querySelectorAll(".alarm-window__text");

time.innerHTML = new Date().toLocaleTimeString();
day.innerHTML = new Date().toLocaleDateString();

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("dark-theme");
  time.classList.toggle("dark-theme");
  day.classList.toggle("dark-theme");
  body.classList.toggle("dark-theme");
  alarmWindow.classList.toggle("dark-theme");
  alarmWindowText.classList.toggle("dark-theme");
});

alarmWindow.addEventListener("click", () => {
  alarmWindow.classList.add("invisible");
});

body.addEventListener("dblclick", (event) => {
  event.preventDefault();
  themeButton.classList.toggle("invisible");
});

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

function hideWindow() {
  if (window) {
    alarmWindow.classList.add("invisible");
  }
}

setInterval(updateTime, 1000);
setInterval(updateDay, 1000);
setTimeout(hideWindow, 10000);
