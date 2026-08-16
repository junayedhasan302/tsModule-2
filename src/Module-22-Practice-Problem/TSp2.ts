/*
Problem 2
Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required.
*/

let value: string | number = "100";
let num = Number(value);
console.log(num+10);

// Double Assertion — Risky Example

// const riskyValue = value as unknown as number;
// const riskyResult = riskyValue + 10;

// Why risky?
// `as unknown as number` শুধু TypeScript-কে বলে যে value-টি number.
// কিন্তু runtime-এ value আসলে "100" একটি string।
// তাই Type Assertion actual value-এর type পরিবর্তন করে না.


