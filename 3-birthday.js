"use strict"
function validAge(age) {
	const birthday = new Date(age).getFullYear()
	const nowTime = new Date().getFullYear()
	const result = nowTime - birthday
	return result > 14
}

console.log(validAge("2000-01-01"))