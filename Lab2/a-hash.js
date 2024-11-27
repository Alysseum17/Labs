"use strict";

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
  Dania: "+380682580514",
  Illya: "+380685941362",
  Zahar: "+380686528512",
  Denis: "+380975412345",
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
