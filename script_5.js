'use strict'

function User (first_name, second_name, age, city) {
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

const ivan = new User ('Ivan', 'Karamazov', 12, 'Minsk');
const petya = new User ('Petya', 'Fedorov', 50, 'Brest');

console.log(ivan);
console.log(petya);