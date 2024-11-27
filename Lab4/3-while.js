"use strict";

const sum = (...args) => {
  let i = 0;
  let s1 = 0;
  while (i < args.length) {
    s1 += args[i];
    i++;
  }
  return s1;
};

module.exports = { sum };
