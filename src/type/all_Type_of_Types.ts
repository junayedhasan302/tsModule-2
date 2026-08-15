// ==========================================
// TypeScript — Student Registration Form
// ==========================================

// 1. Basic Type Aliases
type StudentName = string;
type StudentId = number;
type Department = string;
type DateOfBirth = string;

// 2. Union Type
type Gender = "Male" | "Female" | "Other";

// 3. Union Type for Blood Group
type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

// 4. Union Type for Student Status
type StudentStatus = "Active" | "Inactive" | "Graduated";

// 5. Tuple Type
type PhoneNumber = [string, string];

// 6. Function Type
type CalculateAge = (dob: string) => number;

// 7. Object Type / Custom Type
type Student = {
  // String
  name: StudentName;

  // Number
  id: StudentId;

  // String
  department: Department;

  // String
  dob: DateOfBirth;

  // Union Type
  gender: Gender;

  // Union Type
  bloodGroup: BloodGroup;

  // Optional Property
  email?: string;

  // Tuple
  phone: PhoneNumber;

  // Boolean
  isStudent: boolean;

  // Union Type
  status: StudentStatus;

  // Array of strings
  skills: string[];

  // Array of numbers
  completedCourses: number[];

  // Nested Object
  address: {
    city: string;
    country: string;
    postalCode: number;
  };
};

// ==========================================
// Student Object
// ==========================================

const student: Student = {
  name: "Junayed Hasan",
  id: 302,
  department: "Computer Science and Engineering",
  dob: "2003-05-15",

  gender: "Male",

  bloodGroup: "B+",

  email: "junayed@example.com",

  phone: ["01700000000", "01800000000"],

  isStudent: true,

  status: "Active",

  skills: ["C++", "JavaScript", "TypeScript", "React"],

  completedCourses: [101, 102, 203],

  address: {
    city: "Dhaka",
    country: "Bangladesh",
    postalCode: 1207,
  },
};

// ==========================================
// Function Type
// ==========================================

const calculateAge: CalculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// ==========================================
// Using the Function
// ==========================================

const age = calculateAge(student.dob);

console.log("Student Name:", student.name);
console.log("Student ID:", student.id);
console.log("Department:", student.department);
console.log("Date of Birth:", student.dob);
console.log("Gender:", student.gender);
console.log("Blood Group:", student.bloodGroup);
console.log("Email:", student.email);
console.log("Phone:", student.phone);
console.log("Age:", age);
console.log("Status:", student.status);
console.log("Skills:", student.skills);
console.log("Address:", student.address);
