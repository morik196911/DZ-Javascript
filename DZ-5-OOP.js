"use strict";
const Person = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Person.prototype.tell = function () {
  console.log(this.language + " and " + this.name);
};

const Ork = function (race, name, language, weapon) {
  Person.call(this, race, name, language);
  this.weapon = weapon;
};

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function () {
  console.log("I am have hit");
};

Ork.prototype.spell = function () {
  console.log("I am have spell");
};

Ork.prototype.addSpell = function () {
  console.log("I am creating a spell");
};

const userOrk = new Ork("ork", "Dido", "valery", "Palica");
userOrk.addSpell();
userOrk.hit();
