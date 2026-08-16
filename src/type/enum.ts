enum Department {
  CSE = "CSE",
  EEE = "EEE",
  BBA = "BBA"
}

interface Student {
  name: string;
  id: number;
  department: Department;
}

const student: Student = {
  name: "Junayed",
  id: 46,
  department: Department.CSE
};
console.log(student);  // { name: 'Junayed', id: 46, department: 'CSE' }
