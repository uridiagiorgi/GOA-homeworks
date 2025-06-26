function Car(model, color, releaseYear, isManual) {
    this.model = model
    this.color = color
    this.releaseYear = releaseYear
    this.isManual = isManual
}
const car1 = new Car('nissan skyline', 'white', 2000, true)
const car2 = new Car('toyota prius', 'white', 2009, false)
const car3 = new Car('dodge challanger', 'red', 2009, true)


console.log(car1, car2, car3)