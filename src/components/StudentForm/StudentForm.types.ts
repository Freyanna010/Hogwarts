import { Student } from "shared/types";
export interface InitialStudentForm
  extends Pick<
    Student,
    "id" | "gender" | "house" | "dateOfBirth" | "patronus" | "image"
  > {
  firstName: string;
  lastName: string;
}
