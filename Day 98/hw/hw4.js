function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDescription = function() {
        return `${this.make} ${this.model} (${this.year})`;
    };
    this.age = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };
}
const myCar = new Car("Hyundai", "Elantra", 2015);
console.log(myCar.getDescription()); 
console.log(`Car age: ${myCar.age()} years`);