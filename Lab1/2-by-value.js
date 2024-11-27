"use strict";

const inc = function (n) {
  return ++n;
};
const a = 5;
const b = inc(a);
console.dir({ a, b });
module.exports = { inc };
