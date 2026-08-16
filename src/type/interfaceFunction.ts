// Interface-এর মধ্যে function-এর structure-ও define করা যায়।

interface Student {
  name: string;
  id: number;
  getInfo(): string;
}

const student: Student = {
  name: "Junayed",
  id: 46,
  getInfo() {
    return `Name: ${this.name}, ID: ${this.id}`;
  },
};

console.log(student.getInfo());
