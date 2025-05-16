function Person(name, lastname, age){
    this.name = name
    this.lastname = lastname
    this.age = age
}
const me = new Person('Giorgi', 'Uridia', 13)
console.log(me)
console.log(me + ' Gio')