"use strict";
let lastButton = null;

const result = document.getElementById("result");

const wrapper = document.querySelector(".wrapper");

let count = null;

wrapper.addEventListener("click", function (event) {
  if (lastButton && lastButton !== event.target) {
    lastButton.textContent = "Нажми меня";
    lastButton.classList.remove("blue");
  }

  if (event.target.textContent === "Нажми меня") {
    event.target.textContent = "Нажата";
    event.target.classList.add("blue");
    count++;
    result.innerHTML = count;
  } else {
    event.target.textContent = "Нажми меня";
  }

  lastButton = event.target;
});
