"use strict"
/*const myFoo = new Map([
	["Samara","14"],
	["Kinel","30"],
	["Sochi","17"],
	["Saratov","29"]
])
const f = [...myFoo].map(el=>{
	return el.reverse()
})
console.log(f)

const myFoo2 = new Map([
	["Samara2","14"],
	["Kinel2","30"],
	["Sochi2","17"],
	["Saratov2","29"]
])
const newMap = new Map()
for(const[key , value] of myFoo2) {
  newMap.set(value,key)
}

console.log("Example ", newMap)
*/

/*
const foo = new Map([
	["Samara","14"],
	["Kinel","30"],
	["Sochi","17"]
])
for( const [key, value] of foo) {
	console.log("Key = "+key+ " Value = "+value)
}
console.log("############################")
console.log([...foo.keys()])
console.log([...foo.values()])
const foo2 = new Map()
foo2.set("Kaluga","sting")
.set("Array","massiv")
console.log(foo2)
console.log(foo)
console.log(new Map([...foo, ...foo2]))
*/

/*
const wetherMap = new Map()
console.log(wetherMap)
wetherMap.set("London","20").set("Moscow","7")
console.log(wetherMap)
console.log(wetherMap.get("Moscow"))
console.log(wetherMap.has("London"))
wetherMap.delete("London")
console.log(wetherMap)
wetherMap.clear()
console.log(wetherMap)

const num = new Map()
function func() {return "Hello"}
const arr = Array(1,5,6);
num.set(1,5).set(25,true).set(func(),"str").set(arr,"array")
console.log(num)
console.log(num.size)
console.log(num.get(arr))
*/
/*
const city = new Map([
	["london","10"],
	["Moscow","26"]
])
console.log(city)

const obj = {
	London:7,
	Moscow:14,
	Paris: 25
}
const map = new Map(Object.entries(obj))
console.log(map)
console.log(map.size)
*/