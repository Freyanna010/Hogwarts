export interface StudentFormValue {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other" | "";
  house: string;
  dateOfBirth: string;
  wizard: boolean;
}
