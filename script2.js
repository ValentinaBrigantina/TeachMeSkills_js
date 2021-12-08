'use strict'

const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

const getNewArrFromGroup = (...arrays) => {
  let newArr = [];
  for (let i = 0; i < arrays.length; i++) {
    newArr = [...newArr, ...arrays[i]];
  }
  let result = [];
  for (let numb of newArr) {
    if (numb < 0 && numb % 2 === 0) {
      result.push(numb);
    }
  }

  result.shift();
  result.pop();
  
  return result;
}

let newArrFromGroup = getNewArrFromGroup(arr1, arr2)