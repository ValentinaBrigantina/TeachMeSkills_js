'use strict'

const users = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 16},
    {name: 'Sasha', age: 29},
];
let sumYoung = 0;
for (let i = 0; i < users.length; i++) {
    if (Number(users[i].age) < 18) {
        sumYoung += Number(users[i].age)
    };
}