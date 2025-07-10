class Persona {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  tell() {
    throw new Error("Метод должен реализован в наследуемых классах");
  }
} //class

class Orc extends Persona {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  hit() {
    console.log(`Наносит удары оружием ${this.weapon}`);
  }

  tell() {
    console.log(`Говорит ${this.name} на языке ${this.language}`);
  }
} //class

class Elf extends Persona {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  addSpell() {
    console.log(`Я создаю заклинание ${this.spell}`);
  }

  tell() {
    console.log(`Говорит ${this.name} на языке ${this.language}`);
  }
} //class
