export type Direction = "asc" | "desc" | "none";

export type SortingButtonProps = {
  onSortClick(direction: Direction): void;
};
