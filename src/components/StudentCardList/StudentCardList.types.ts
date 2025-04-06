import { Direction } from "@components/ui/SortingButton/SortingВutton.types";
import { Student } from "@types";

export interface StudentCardListProps {
  onLikeClicK: (studentId: string) => void;
  onCardClick: (studentId: string) => void;
  onSortClick: (direction: Direction) => void;
  onSearchChange: (value: string) => void;
  className: string;
  students: Student[];
  searchValue: string;
}
