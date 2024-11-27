"use strict";

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = (name, city) => {
  const objUser = {
    name: name,
    city: city,
  };
  return objUser;
};
module.exports = { createUser };
