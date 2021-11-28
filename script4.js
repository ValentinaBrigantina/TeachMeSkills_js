'use strict'

let expectedColor = prompt('Загадай цвет!');
let attemptNumber = Number(prompt('Сколько тебе нужно попыток, чтобы угадать цвет?', 3));

while (attemptNumber > 0) {
    let color = prompt('Угадывай!');
    attemptNumber -= 1;

    if (expectedColor == color ) {
        alert('Поздравляю, угадал!'); break;
    }
    else if (attemptNumber == 0) {
        alert('К сожалению, попытки закончились');
    }
    else {
        alert('Не угадал, попробуй еще раз!');  
    }
}