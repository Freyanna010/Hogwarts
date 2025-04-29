import { Student } from "shared/types";

export interface StudentForm
  extends Pick<
    Student,
    | "id"
    | "name"
    | "gender"
    | "house"
    | "dateOfBirth"
    | "wizard"
    | "patronus"
    | "image"
  > {}
export interface StudentFormProps {
  onAddStudent: (student: Student) => void;
}
