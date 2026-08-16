"use strict";
/*
function functionName<T>(value: T): T {
  return value;
}
*/
function identity(value) {
    return value;
}
const result1 = identity("Junayed");
const result2 = identity(46);
console.log(result1);
console.log(result2);
