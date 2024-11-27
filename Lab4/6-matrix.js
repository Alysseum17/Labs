"use strict";
const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const max = (matrix) => {
  let s = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > s) {
        s = matrix[i][j];
      }
    }
  }
  return s;
};

module.exports = { max };
