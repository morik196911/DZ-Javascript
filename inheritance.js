"use strict";

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function () {
  console.log("Buy");
};

const AudiBook = function (title, author, lenMin) {
 Book.call(this, title, author)
 this.lenMin = lenMin
};

AudiBook.prototype = Object.create(Book.prototype)
AudiBook.prototype.constructor = AudiBook

AudiBook.prototype.log = function () {
  console.log(`${this.author} - ${this.lenMin}`);
};

const Abook = new AudiBook("Lord of the rin", "Tolekin" , 600)
//Abook.log()
