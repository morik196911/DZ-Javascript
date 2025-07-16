"use strict"
async function main() {
  const res = await fetch("https://dummyjson.com/docs/auth/",{
	method: "POST",
	headers: {
		"Content-type":"application/json"
	},

  })

  const data = await res.json()
  console.log(data)
}

//main()