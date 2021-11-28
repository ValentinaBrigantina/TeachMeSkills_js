'use strict'

let age = Number(prompt('Укажите возраст', 18));

if (!age || age < 1) {
    console.log('Неверно указан возраст');
}

else if (age > 18) {
    console.log(`Привет, мне ${age} лет`);
}

else {
    console.log('Верно');
}

console.log((!age || age < 1) ? 'Неверно указан возраст' : (age > 18) ? `Привет, мне ${age} лет` : 'Верно');