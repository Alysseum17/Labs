"use strict";

const { random } = require("./1-random");
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const generateKey = (length, possible) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += possible[Math.floor(Math.random() * possible.length)];
  }
  return result;
};
console.log(generateKey(16, characters));
module.exports = { generateKey };
