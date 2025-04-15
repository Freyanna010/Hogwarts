import { Student } from "@types";

export interface FamousThreeSectionProps {
  students: Student[];
  onStudentClick: (studentId: string) => void;
}
