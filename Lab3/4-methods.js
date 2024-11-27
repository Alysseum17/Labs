"use strict";
const exm = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};
const methods = (iface) => {
  const arr = [];
  for (const i in iface) {
    if (typeof iface[i] === "function") {
      arr.push([i, iface[i].length]);
    }
  }
  return arr;
};
console.log(methods(exm));

module.exports = { methods };
