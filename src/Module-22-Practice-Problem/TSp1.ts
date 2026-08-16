/*
1. 
Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.

*/

let val: unknown = "Hello TypeScript";

// Using "as" syntax
const str = val as string;
const lenOfStr = str.length;
console.log(lenOfStr); // 16


// Using angle-bracket syntax
const str2 = <string>val;
const lenOfStr2 = str2.length;
console.log(lenOfStr2); // 16