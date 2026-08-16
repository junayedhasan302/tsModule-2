"use strict";
/*
1.
Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.

*/
let val = "Hello TypeScript";
const str = val;
let lenOfStr = str.length;
console.log(lenOfStr);
