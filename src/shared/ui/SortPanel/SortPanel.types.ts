import { Direction } from "../SortingButton/SortingВutton.types";

export interface SortPanelProps {
  title: string;
  onSortClick: (direction: Direction) => void;
}