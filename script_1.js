'use strict'

class User {

    constructor(firstName, secondName, age, city) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.city = city;
    }

}

let userVasya = new User('Vasko', 'Vasilij', 20, 'Borisov');
let userMasha = new User('Pushko', 'Mariya', 20, 'Molodechno');

User.prototype.getInfo = function() {
    console.log(`Пользователь ${this.firstName} ${this.secondName}, ${this.age} лет. Живет в городе ${this.city}.`)
}

console.log(userVasya.getInfo());
console.log(userMasha.getInfo());