"use strict";

const sum = (...args) => {
  let i = 0;
  let s1 = 0;
  do {
    s1 += args[i];
    i++;
  } while (i < args.length);
  return s1;
};
console.log(sum(1, 2, 3, 4));
module.exports = { sum };
