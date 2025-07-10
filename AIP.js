class Film {
	#name
	#author
	#length
	constructor(name , author ,length) {
		this.#name = name
		this.#author = author
        this.#length = length
	}

	get name() {
		return this.#name
	}
	 get author() {
		return this.#author
	}

	get length() {
		return this.#length
	}

}//class

const film = new Film("Avatar", "Kameron", 240)
//console.log(film.author)