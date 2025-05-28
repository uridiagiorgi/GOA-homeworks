function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDescription = function() {
        return `${this.make} ${this.model} (${this.year})`;
    };
}
const car1 = new Car("Ford", "Focus", 2018);
const car2 = new Car("Kia", "Sportage", 2023);
const car3 = new Car("Audi", "R8", 2023);
console.log(car1.getDescription());
console.log(car2.getDescription()); 
console.log(car3.getDescription());