'use strict'

const fibonachi = n => {
    if (n <= 1) {
        return n;
    }

    return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(8));