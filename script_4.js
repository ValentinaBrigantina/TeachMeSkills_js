'use strict'

let counter = () => {
    let count = 0;
    return function() {
        return count++;
    }
}

const func = counter()

console.log(func());
console.log(func());
console.log(func());