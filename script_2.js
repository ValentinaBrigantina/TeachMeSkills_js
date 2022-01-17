'use strict'

const users = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 16},
    {name: 'Sasha', age: 29},
]


 for(let user of users) {
    let div = document.createElement('div');
     div.innerHTML = `<p>Имя: ${user.name}, возраст: ${user.age} лет.</p>`
     document.body.append(div)
 }