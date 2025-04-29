import { Student } from "shared/types";

export interface FamousThreeSectionProps {
  students: Student[];
  onStudentClick: (studentId: string) => void;
}
