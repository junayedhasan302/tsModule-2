/*
interface হলো object-এর structure/shape define করার একটি উপায়। অর্থাৎ কোনো object-এর মধ্যে কোন property থাকবে এবং তাদের type কী হবে, সেটা আগে থেকে নির্ধারণ করা যায়।

কোনো property optional করতে ? ব্যবহার করা যায়।

interface InterfaceName {
  property: type;
}

*/

interface Student {
  name: string;
  id: number;
  department: string;
  gpa: number;
  email?: string; // Optional 
}

const student: Student = {
  name: "Junayed",
  id: 46,
  department: "Computer Science",
  gpa: 3.6,
//   email: "jhjh@gmail.com"; optional
//   email: 45; X
};

console.log(student);