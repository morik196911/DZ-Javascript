"use strict"
const product1 = {id: 1, name: 'Bread', count: 1}
const product2 = {id: 2, name: 'Milk', count: 1}

function Cart() {
	this.products = []
}
Cart.prototype.Addproduct = function(product) {
	if(this.products.includes(product)) {
		return product.count++
	}else {
		this.products.push(product)
	}
}

Cart.prototype.remove = function (good) {
    const item = this.products.find(product => product.id === good.id)
    if (item) item.count--
    if (item && item.count === 0) return this.products = this.products.filter(product => product.id !== item.id) || []
}

const Product = function(product) {
	this.id = product.id;
	this.name = product.name;
	this.count = product.count
}

const bread = new Product(product1)
const mylk = new Product(product2)
const cart = new Cart()
cart.Addproduct(bread)
cart.Addproduct(bread)
cart.Addproduct(mylk)
//console.log(cart)
cart.remove(bread)
cart.remove(bread)
//console.log(cart)