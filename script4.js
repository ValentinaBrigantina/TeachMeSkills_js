'use strict'

let expectedColor = prompt('Загадай цвет!');
let attemptNumber = Number(prompt('Сколько тебе нужно попыток, чтобы угадать цвет?', 3));
let color;

while (attemptNumber > 0 && expectedColor !== color) {
    color = prompt('Угадывай!');
    attemptNumber -= 1;

    if (expectedColor == color) {
        alert('Поздравляю, угадал!');
    }
    else if (attemptNumber == 0) {
        alert('К сожалению, попытки закончились');
    }
    else {
        alert('Не угадал, попробуй еще раз!');  
    }
}