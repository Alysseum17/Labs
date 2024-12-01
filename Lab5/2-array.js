'use strict';

const array = () => {
  const arr1 = [];
 const defArr = (i) => arr1[i];
 defArr.push = (i) => arr1.push(i);
 defArr.pop = () => arr1.pop();
 return defArr;
};
const arr = array();

module.exports = { array };
