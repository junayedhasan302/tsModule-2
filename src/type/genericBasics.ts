/*
Generic হলো এমন একটি reusable type system যেখানে আমরা code লেখার সময় নির্দিষ্ট data type না দিয়ে পরে কোন type ব্যবহার হবে সেটা নির্ধারণ করতে পারি।
function functionName<T>(value: T): T {
  return value;
}
*/

function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("Junayed");
const result2 = identity<number>(46);

console.log(result1);
console.log(result2);