"use strict";

const pipe =
  (...fns) =>
  (x) => {
    for (let value of fns) {
      if (typeof value !== "function") {
        throw new Error("All compose arguments should be functions");
      }
    }
    if (fns.length === 0) return x;
    let res = x;
    for (let i = 0; i < fns.length; i++) {
      res = fns[i](res);
    }
    return res;
  };
/*const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const f = pipe(inc, twice, cube);
const y = f(5);
console.log(y);
*/
module.exports = { pipe };
