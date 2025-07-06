"use strict"

const map = new WeakMap()

let a = {a:2}
let f = {f:12}
map.set(f,"test").set(a,25)

f = null
setTimeout(()=>{
	console.log(map)
},1000)

let cache = new WeakMap()

function getValue(foo) {
	if(!cache.has(foo)) {
      const res = 258;
	  cache.set(foo, res)
	}
	return cache.get(foo)
}

const result = getValue(a)
console.log(result)










