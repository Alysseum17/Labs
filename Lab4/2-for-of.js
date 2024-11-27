"use strict";

const sum = (...args) => {
  let s = 0;
  for (let i of args) {
    s += i;
  }
  return s;
};

module.exports = { sum };
