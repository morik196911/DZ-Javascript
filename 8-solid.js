class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  CalculateTotal() {
    throw new Error("Реализация в наследуемых классах");
  }
} //class

class Fixed_Billing extends Billing {
  constructor(amount) {
    super(amount);
  }

  CalculateTotal() {
    return this.amount;
  }
} //class

class Hour_Billing extends Billing {
  constructor(amount, hour) {
    super(amount);
    this.hour = hour;
  }
  CalculateTotal() {
    return Number(this.amount) * Number(this.hour);
  }
} //class

class Item_Billing extends Billing {
  constructor(amount, elem) {
    super(amount);
    this.elem = elem;
  }

  CalculateTotal() {
    return Number(this.amount) * Number(this.elem);
  }
} //class

const fix = new Fixed_Billing(50);
const hour = new Hour_Billing(80, 5);
const item = new Item_Billing(90, 8);
console.log(fix.CalculateTotal());
console.log(hour.CalculateTotal());
console.log(item.CalculateTotal());
