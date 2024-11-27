"use strict";

const ipToInt = (ip = "127.0.0.1") => {
  const arr = ip.split(".");
  for (let i in arr) {
    arr[i] = parseInt(arr[i]);
  }
  const func = (result, current) => (result << 8) + current;
  return arr.reduce(func);
};
console.log(ipToInt("127.0.0.1"));
module.exports = { ipToInt };
