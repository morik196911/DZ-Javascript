"use strict"
function getData( URL, errorMessage) {
return	fetch(URL)
	.then(response => {
		if(!response.ok) {
			throw new Error(`${errorMessage} ${response.status}`)
		}
		return response.json()
	})
}

getData("https://dummyjson.com/products/", "My error")
.then(data => console.log(data))
