/*
Function ছাড়াও type-এর সাথে generic ব্যবহার করা যায়।

type Box<T> = {
  value: T;
};
*/
const numberBox: Box<number> = {
  value: 100
};

const stringBox: Box<string> = {
  value: "Hello"
};
console.log(numberBox, stringBox);

//একই Box type বিভিন্ন data type-এর জন্য ব্যবহার করা যাচ্ছে।