"use strict"

const Bookes = function(title, author) {
	this.title = title
	this.author = author
}

const lordBook = new Bookes("Ovod", "Voinich")
console.log(lordBook)
console.log(Bookes.prototype.__proto__)