"use strict";

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = function (start, end) {
  const arr = [];
  for (let i = 0; start <= end; i++) {
    arr[i] = start;
    start++;
  }
  return arr;
};
range(15, 30);
console.dir(range(15, 30));

module.exports = { range };
/*const range = function (start, end) {
  const arr = [];
  let i = 0;
  for (let begin = start; begin <= end; begin++) {
    arr[i] = begin;
    i++;
  }
  return arr;
};
range(15, 30);
console.dir(range(15, 30));

module.exports = { range };
*/
