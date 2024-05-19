"use strict";

const themeButton = document.querySelector(".settings__theme-switcher");
const container = document.querySelector(".container");
const clock = document.querySelector(".clock");
const stopwatch = document.querySelector(".stopwatch");
const timer = document.querySelector(".timer");
const day = document.querySelector(".day");
const body = document.querySelector(".page");
const alarmWindow = document.querySelector(".alarm-window");
const alarmWindowText = document.querySelectorAll(".alarm-window__text");
const modeButtons = document.querySelectorAll(
  ".settings__mode__radio, .settings__mode__label"
);
// const display = document.querySelector(".time-display");

console.log(modeButtons);
for (let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", () => {
    for (let j = 0; j < modeButtons.length; j++) {
      if (modeButtons[0].checked) {
        clock.classList.remove("invisible");
        stopwatch.classList.add("invisible");
        timer.classList.add("invisible");
      }
      if (modeButtons[2].checked) {
        clock.classList.add("invisible");
        stopwatch.classList.remove("invisible");
        timer.classList.add("invisible");
      }
      if (modeButtons[4].checked) {
        clock.classList.add("invisible");
        stopwatch.classList.add("invisible");
        timer.classList.remove("invisible");
      }
    }
  });
}

clock.innerHTML = new Date().toLocaleTimeString();
day.innerHTML = new Date().toLocaleDateString();

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("dark-theme");
  clock.classList.toggle("dark-theme");
  day.classList.toggle("dark-theme");
  body.classList.toggle("dark-theme");
  alarmWindow.classList.toggle("dark-theme");
  for (let i = 0; i < alarmWindowText.length; i++) {
    alarmWindowText[i].classList.toggle("dark-theme");
  }
});

alarmWindow.addEventListener("click", () => {
  alarmWindow.classList.add("invisible");
});

body.addEventListener("dblclick", (event) => {
  event.preventDefault();
  themeButton.classList.toggle("invisible");
});

function updateClock() {
  if (clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
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

// function classChecker() {
//   if (display.classList.contains("clock")) {
//     setInterval(updateClock, 1000);
//   }
// }

// function classChecker() {
//   if (display.classList.contains("timer")) {
//     display.classList.add("invisible");
//   }

//   if (display.classList.contains("clock")) {
//     display.classList.remove("invisible");
//   }
// }
setInterval(updateClock, 1000);
setInterval(updateDay, 1000);
setTimeout(hideWindow, 10000);
// setInterval(classChecker, 1000);
