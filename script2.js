'use strict'

let age = Number(prompt('Укажите возраст'));

if (!age || age < 1) {
    console.log('Неверно указан возраст');
}

else {
    console.log('Верно');
}

console.log((!age || age < 1) ? 'Неверно указан возраст' : 'Верно');