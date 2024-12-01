'use strict';

function seq(...args) {
  const functions = [...args];
  const chain = (...newArgs) => {
      if (typeof newArgs[0] === 'number') {
        
          return functions.reduce((result, func) => func(result), newArgs[0]);
      }
      
      functions.push(...newArgs);
      return chain;
  };

  return chain;
}


const result1 = seq(x => x + 2, x => x * 3)(5);  
console.log(result1); 

const result2 = seq(x => x - 1)(x => x ** 2)(4); 
console.log(result2); 


module.exports = { seq };
