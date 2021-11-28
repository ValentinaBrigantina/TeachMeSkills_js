'use strict'

let a = Number(prompt('Введите число', 0));

if (a == 0) {
    console.log('Неверно');
}

else {
    console.log('Верно');
}


console.log(a == 0 ? 'Неверно' : 'Верно');