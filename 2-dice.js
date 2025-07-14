"use strict"
let arr = {
	"D4":4,
	"D6":6,
    "D8":8,
	"D10":10,
	"D12":12,
	"D16":16,
	"D20":20
}

function dice( arr) {
  const res = Math.floor(Math.random() *  Object.keys(arr).length) + 1;
  const valuesArr = Object.values(arr)
  const count = valuesArr[res-1]
  const final = Math.floor(Math.random() * count) + 1;
  return final
}
console.log(dice(arr))
console.log(dice(arr))
console.log(dice(arr))