import { Direction } from "../SortingВutton.types";

export const getDirection = (direction: Direction): Direction => {
  const directionMap: Record<Direction, Direction> = {
    none: "asc",
    asc: "desc",
    desc: "none",
  };
  return directionMap[direction];
};
