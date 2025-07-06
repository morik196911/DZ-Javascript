"use strict"
const a = {a:1}
const b = {b:2}
let foo = new Set().add("Hello").add("Goodby")
const mset = new WeakSet([a, b])
mset.add(a).add(b)
console.log("Example view "+mset.has(a))

console.log(mset.has(foo))