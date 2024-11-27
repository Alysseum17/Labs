"use strict";

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = function (start, end) {
  const arr = [];
  let i = 0;
  for (let begin = start; begin <= end; begin++) {
    if (begin % 2 !== 0) {
      arr[i] = begin;
      i++;
    }
  }
  return arr;
};
console.dir(rangeOdd(15, 30));

module.exports = { rangeOdd };
