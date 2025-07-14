"use strict"
let foo = new Set( [
{ id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 1, name: "Вася"},
])



 const arr = new Set()
 const uniq = new Set()
const doo = [...foo].map(el => {
	if(!arr.has(el.id)){
		arr.add(el.id)
     uniq.add(el)
	}
})

console.log(uniq)




