"use strict";

/*const arr = [true, "hello", 5, 12, -200, false, false, "word"];
const countTypesInArray = {
  number: 0,
  string: 0,
  boolean: 0,
};
for (let value of arr) {
  typeof value === "number"
    ? countTypesInArray.number++
    : typeof value === "string"
    ? countTypesInArray.string++
    : typeof value === "boolean"
    ? countTypesInArray.boolean++
    : console.log("Incorrect value in array");
}
console.dir(countTypesInArray);
module.exports = { countTypesInArray };
*/
const values = [
  true,
  "hello",
  5,
  12,
  -200,
  false,
  false,
  "word",
  undefined,
  null,
  "",
  {},
  [],
];
const countTypesInArray = function (arr) {
  const countTypes = {};
  for (let value of arr) {
    const type = typeof value;
    if (!countTypes[type]) {
      countTypes[type] = 0;
    }
    countTypes[type]++;
  }
  return countTypes;
};
console.dir(countTypesInArray(values));
module.exports = { countTypesInArray };
