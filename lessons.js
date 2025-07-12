"use strict"

const request = new XMLHttpRequest()
request.open("GET", "https://dummyjson.com/products")
request.send()

request.addEventListener("load", function() {
	const data = JSON.parse(this.responseText)
	const products = data.products
	     const sums = products.reduce((acc, product) => {
            acc += product.price
            return acc
        }, 0)
		
	console.log( sums / Math.round(Number(products.length)))
})