// একটি interface অন্য interface-এর properties inherit করতে পারে।
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentId: number;
  department: string;
}

const student: Student = {
  name: "Junayed",
  age: 22,
  studentId: 46,
  department: "CSE"
};