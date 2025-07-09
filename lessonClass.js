class User {
	#login
	#password

	constructor(login, password) {
		this.#login = login;
		this.#password = this.#reversPassword(password);
	}

   #reversPassword(password) {
	[...password].reverse().join('').toString()
   }

	get login() {
		return this.#login
	}

   changePassword(oldPassword, newPassword) {
	if(oldPassword !== this.#reversPassword(newPassword)){
		console.log("Пароль не совпадает")
		return false
	}
	this.#password = this.#reversPassword(newPassword)
	console.log("Пароль успешно заменён")
	return true
   }

   confirmPassword(password) {
	let result
	password === this.#reversPassword(this.#password)
	? result = "Пароль верный"
	: result =  "Пароль неверный"
     return result
   }

}//class