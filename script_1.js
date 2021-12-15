'use strict'

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

const arrUnique = arr.reduce((acc, numb) => {
  if (acc.indexOf(numb) < 0) {
    acc.push(numb);
  }
  return acc;
}, [])

console.log(arrUnique)