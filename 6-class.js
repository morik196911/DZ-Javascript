class Car {
	#brand
	#model
	#run

	constructor(brand , model , run) {
		this.#brand = brand
		this.#model = model
		this.#run = run
	}
    
     get run() {
		return this.#run;
	 }

	 set run(value) {
		this.#run += value
	 }

	info() {
		return ("Brand "+this.#brand + " Model "+this.#model + " Run "+this.#run)
	}
}

const car = new Car("Mersudes"," EC-500",85000)
car.run = 69000
console.log(car.info())