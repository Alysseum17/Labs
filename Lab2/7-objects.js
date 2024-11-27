"use strict";

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = function () {
  const obj1 = { name: "Dania" };
  let obj2 = { name: "Dania" };
  obj1.name = "Misha";
  obj2.name = "Misha";
  //obj1 = { name: "Oleksandr" }; doesn`t work because we can`t change const object by replacing it by other object, but we can change his keys and values
  obj2 = { name: "Oleksandr" };
  console.log(obj1.name, obj2.name, obj1, obj2);
};
fn();
module.exports = { fn };
