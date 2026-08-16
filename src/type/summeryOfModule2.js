"use strict";
/**
 * ============================================================
 * TypeScript — Last Day Learning Summary
 * ============================================================
 *
 * 1. Type Alias / Custom Type
 *    `type` keyword ব্যবহার করে নিজের custom type তৈরি করা যায়।
 *
 * 2. Object Type
 *    Object-এর property এবং তাদের type define করা যায়।
 *
 * 3. Optional Property
 *    `?` ব্যবহার করে কোনো property optional করা যায়।
 *
 * 4. Union Type
 *    `|` ব্যবহার করে একাধিক possible type/value define করা যায়।
 *
 * 5. Interface
 *    Object-এর structure বা contract define করার জন্য ব্যবহার করা হয়।
 *
 * 6. Interface Extends
 *    একটি interface-এর property অন্য interface-এ নেওয়ার জন্য `extends`
 *    ব্যবহার করা হয়।
 *
 * 7. Type vs Interface
 *    দুটোই object structure define করতে পারে।
 *    `type` union, tuple, primitive alias ইত্যাদির জন্য বেশি flexible।
 *    `interface` object structure এবং inheritance-এর জন্য বেশি ব্যবহৃত হয়।
 *
 * 8. Function Type
 *    Function-এর parameter এবং return type define করা যায়।
 *
 * 9. Generics
 *    একই code বিভিন্ন data type-এর সাথে reusable এবং type-safe
 *    ভাবে ব্যবহার করা যায়।
 *
 * 10. Generic Type
 *     Type-এর সাথে generic ব্যবহার করে reusable structure তৈরি করা যায়।
 *
 * 11. Generic Interface
 *     Interface-কে বিভিন্ন data type-এর সাথে reusable করা যায়।
 *
 * 12. Generic Constraint
 *     Generic-এর type-এর উপর restriction দেওয়ার জন্য `extends`
 *     ব্যবহার করা হয়।
 *
 * 13. Enum
 *     Related fixed এবং named values-এর একটি set তৈরি করা যায়।
 *
 * 14. as const
 *     Value-এর literal type ধরে রাখে এবং object/array-এর value-কে
 *     readonly করে।
 *
 * ============================================================
 */
const studentName = "Junayed";
const studentId = 46;
console.log("1. Type Alias:", studentName, studentId);
const student = {
    name: "Junayed",
    id: 46,
    department: "CSE",
    gpa: 3.6
};
console.log("2. Object Type:", student);
const user = {
    name: "Rafi",
    age: 22
};
console.log("3. Optional Property:", user);
let userId = 46;
console.log("4. Union Type:", userId);
userId = "CSE-46";
console.log("4. Union Type:", userId);
const studentInfo = {
    name: "Junayed",
    id: 46,
    department: "CSE"
};
console.log("5. Interface:", studentInfo);
const profile = {
    name: "Junayed",
    age: 22,
    studentId: 46,
    department: "CSE"
};
console.log("6. Interface Extends:", profile);
const typeStudent = {
    name: "Rafi",
    id: 101
};
const interfaceStudent = {
    name: "Sakib",
    id: 102
};
console.log("7. Type:", typeStudent);
console.log("7. Interface:", interfaceStudent);
const add = (a, b) => {
    return a + b;
};
const sum = add(10, 20);
console.log("8. Function Type:", sum);
// ============================================================
// 9. GENERICS
// ============================================================
function identity(value) {
    return value;
}
const stringValue = identity("Junayed");
const numberValue = identity(46);
const booleanValue = identity(true);
console.log("9. Generic String:", stringValue);
console.log("9. Generic Number:", numberValue);
console.log("9. Generic Boolean:", booleanValue);
const numberBox = {
    value: 100
};
const stringBox = {
    value: "Hello"
};
console.log("10. Generic Type:", numberBox);
console.log("10. Generic Type:", stringBox);
const response = {
    data: {
        name: "Junayed",
        id: 46
    },
    success: true,
    message: "Student found"
};
console.log("11. Generic Interface:", response);
// ============================================================
// 12. GENERIC CONSTRAINT
// ============================================================
function getLength(value) {
    return value.length;
}
const textLength = getLength("Junayed");
const arrayLength = getLength([10, 20, 30]);
console.log("12. Generic Constraint:", textLength);
console.log("12. Generic Constraint:", arrayLength);
// ============================================================
// 13. ENUM
// ============================================================
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (Gender = {}));
const gender = Gender.Male;
console.log("13. Enum:", gender);
// ============================================================
// 14. ENUM + INTERFACE
// ============================================================
var Department;
(function (Department) {
    Department["CSE"] = "CSE";
    Department["EEE"] = "EEE";
    Department["BBA"] = "BBA";
})(Department || (Department = {}));
const collegeStudent = {
    name: "Junayed",
    department: Department.CSE
};
console.log("14. Enum + Interface:", collegeStudent);
// ============================================================
// 15. AS CONST
// ============================================================
const roles = {
    ADMIN: "admin",
    USER: "user",
    MODERATOR: "moderator"
};
console.log("15. as const:", roles.ADMIN);
// ============================================================
// 16. AS CONST + LITERAL UNION
// ============================================================
const colors = [
    "red",
    "green",
    "blue"
];
const selectedColor = "green";
console.log("16. Literal Union:", selectedColor);
// ============================================================
// FINAL OUTPUT SUMMARY
// ============================================================
console.log("\n========== FINAL SUMMARY ==========");
console.log("Type Alias      → Custom Type");
console.log("Object Type     → Object Structure");
console.log("Optional (?)     → Optional Property");
console.log("Union (|)        → Multiple Possible Types");
console.log("Interface        → Object Contract");
console.log("Extends          → Interface Inheritance");
console.log("Function Type    → Function Structure");
console.log("Generics         → Reusable Type-Safe Code");
console.log("Generic Type     → Reusable Type Structure");
console.log("Generic Interface→ Reusable Interface");
console.log("Generic Constraint → Restricted Generic");
console.log("Enum             → Fixed Named Values");
console.log("as const         → Literal + Readonly");
