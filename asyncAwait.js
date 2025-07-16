"use strict"

async function getProducts() {
	try {
		const productsResponse = await fetch("https://dummyjson.com/products")
		if(!productsResponse.ok) {
			throw new Error(productsResponse.status)
		}
	  const data = await productsResponse.json()
	  console.log(data.products[0].id)

	 const productResponse = await fetch("https://dummyjson.com/products/"+data.products[0].id)
     const product = await productResponse.json()
     console.log(product)
	} catch (error) {
		console.error(error)
	}finally {
		console.log("Finally")
	}
}//f

//getProducts()
//console.log("END")