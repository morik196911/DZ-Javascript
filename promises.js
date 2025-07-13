"use strict"

 fetch("https://dummyjson.com/products/1")
 .then((response) =>  { return response.json()})
 .then((data) => { 
	 //console.log(data)
 })
/*
 fetch("https://dummyjson.com/products/")
 .then(response => response.json())
 .then(data => {
	console.log(data)
return	fetch("https://dummyjson.com/products/"+data.products[0].id)
 }).then(response => response.json())
 .then(value => console.log(value))
 .catch(error => console.log(error))
 .finally(() => console.log("This is END"))
*/
