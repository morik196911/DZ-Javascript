"use strict"

function generate(event) {
console.log(event.target.getBoundingClientRect())

console.log(`${window.scrollX}`)
console.log(`${window.scrollY}`)
console.log(`Client Width ${document.documentElement.clientWidth}`)
console.log(`Client Height ${document.documentElement.clientHeight}`)
}