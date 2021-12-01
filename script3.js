'use strict'

let string = '';
for (let i = 1; i < 20; i++) {
    i % 2 == 0 ? string = '-' + string : string = '*' + string;
    console.log(string + '\n')
}