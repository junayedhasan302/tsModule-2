interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}
// এখন Student data:
const studentResponse: ApiResponse<string> = {
  data: "Junayed",
  success: true,
  message: "Student found"
};
// আবার Student object:
interface Student {
  name: string;
  id: number;
}

const response: ApiResponse<Student> = {
  data: {
    name: "Junayed",
    id: 46
  },
  success: true,
  message: "Student found"
};