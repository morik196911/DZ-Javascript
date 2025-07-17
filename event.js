"use strict"
const button = document.querySelector(".button")

const evHandler = function() {
	console.log("Event11111")
}

button.addEventListener("click" , evHandler)

button.addEventListener("click" , function(event) {
   console.log("Event22")
   button.removeEventListener("click", evHandler)
})