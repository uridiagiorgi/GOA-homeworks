function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDescription = function() {
        return `${this.make} ${this.model} (${this.year})`;
    };
}
const myCar = new Car("BMW", "M4 Competition", 2022);
console.log(myCar.getDescription());