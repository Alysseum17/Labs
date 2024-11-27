"use strict";
const inc = function (num) {
  typeof num === "object"
    ? num.n++
    : console.log("Please put a object into fucntion");
};
const obj = { n: 5 };
console.dir(obj);
module.exports = { inc };
