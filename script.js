'use strict'

const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, 8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, 76, -67, 78];

function sum (arr) {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 !== 0) {
            arrSum += arr[i];
        }
    }
    return arrSum
} 

const firstSum = sum(arr1);
const secondSum = sum(arr2);
const thirdSum = sum(arr3);

console.log('1: ' + firstSum + '\n2: ' + secondSum + '\n3: ' + thirdSum)