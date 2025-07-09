"use strict"
const userMethods = {
  log() {
    console.log(`User: ${this.email}`);
  },
  init(email, password) {
    this.email = email;
    this.password = password;
    return this;
  },
};

const user11 = Object.create(userMethods).init("test@ya.ru","9632587")
user11.log()
const admin = Object.create(userMethods).init("admin@ya.ru","123456")
admin.log()
admin.deleteFunc = function(user) {
	console.log(`Пользователь удалён: ${user.email}`)
}
const client = Object.create(admin).init("client@ya.ru","546231")
client.deleteFunc(user11)

console.log(Object.getPrototypeOf(admin) === userMethods); // true
console.log(Object.getPrototypeOf(client) === admin); // true