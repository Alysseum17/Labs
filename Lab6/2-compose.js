"use strict";

const compose = (...fns) => {
  const processors = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const processor of processors) {
        processor(error);
      }
      return undefined;
    }
  };
  composed.on = (name, processor) => {
    if (name === "error") processors.push(processor);
  };
  return composed;
};
/*const inc = (x) => ++x;
const throwError = (x) => {
  if (x > 10) throw new Error("The number multiplied by 2 is greater than 10");
  return x;
};
const multiply = (x) => x * 2;

const f = compose(inc, throwError, multiply);
f.on("error", (e) => {
  console.error("Error:", e.message);
});
console.log(f(12));
*/
module.exports = { compose };
