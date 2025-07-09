"use strict"
const a = [1,3,4]
//console.dir(a)
/* Function constructor */

function User(email, password) {
	this.email = email
	this.password = password
	this.sayfunc = () =>{console.log("Hello sayfunc")}
}

let user = new User("Morik@ya.ru","12345")
let user2 = new User("Morik2@ya.ru","1222345")
User.prototype.func = function() {
	console.log("Hello prototype")
}
//console.log(user)
//console.log(user2)

const Book = function(title, author) {
 this.title = title;
 this.author = author;
 this.isRead = false;
}

const lord = new Book("Lord of the ring","Tolkinen")

Book.prototype.read = function() {
	this.isRead = true
}
Book.prototype.caver = "Paper"
//console.log(lord)
//console.log(lord.__proto__)
//console.log(lord.hasOwnProperty("caver"))
//console.log("isRead",lord.hasOwnProperty("isRead"))
//console.log("Author",lord.hasOwnProperty("author"))