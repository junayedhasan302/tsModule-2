"use strict";
var Department;
(function (Department) {
    Department["CSE"] = "CSE";
    Department["EEE"] = "EEE";
    Department["BBA"] = "BBA";
})(Department || (Department = {}));
const student = {
    name: "Junayed",
    id: 46,
    department: Department.CSE
};
console.log(student);
