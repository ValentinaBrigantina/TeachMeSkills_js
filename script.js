'use strict'

function avg() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum / arguments.length;
  }
  
  const avg = function(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum / args.length;
  }
  
  
  const avg = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum / args.length;
  }