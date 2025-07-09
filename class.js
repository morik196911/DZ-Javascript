class Book {
	isRead = false
	static z = 25
	static num = Number.MAX_SAFE_INTEGER
	constructor(title, author ) {
		this._title = title
		this._author = author
	}
	static {
     Book.z = Book.z - 14
	}

	read() {
		return this.isRead
	}
	set title(value) {
      this._title = value
	}

	get title() {
		return this._title
	}
}

const book = new Book("Ovod" , "Voinich")
//console.log(book.title)
//console.log(Book.num)
//console.log(Book.z)