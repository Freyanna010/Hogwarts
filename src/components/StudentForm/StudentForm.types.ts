export interface StudentFormValue {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other" | null;
  house: string;
  dateOfBirth: string;
  wizard: boolean;
}
