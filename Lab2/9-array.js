"use strict";

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  {
    name: "Dania Marchenko",
    phone: "+380682580514",
  },
  {
    name: "Illya Semchenko",
    phone: "+380685941362",
  },
  {
    name: "Zahar Suhomlin",
    phone: "+380686528512",
  },
  {
    name: "Denis Oleksiychuk",
    phone: "+380975412345",
  },
];

const findPhoneByName = (name) => {
  for (let i of phonebook) {
    if (i.name === name) {
      return i.phone;
    }
  }
};
module.exports = { phonebook, findPhoneByName };
