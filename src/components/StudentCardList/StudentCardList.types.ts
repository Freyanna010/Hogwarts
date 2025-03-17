import { Student } from "@types";

export interface StudentCardListProps {
  onLikeClicK: (studentId: string) => void;
  onDeleteClicK: (studentId: string) => void;
  onCardClick: (studentId: string) => void;
  onSortClick: (direction: "a-z" | "z-a") => void;
  onSearchChange: (value: string) => void
  students: Student[];
}
