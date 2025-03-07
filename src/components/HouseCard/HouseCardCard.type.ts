import { House } from "@store/data";

export type HouseCardProps = Omit<House, "id"> & {
  id: string;
  onClick?: (id: string) => void;
  style?: React.CSSProperties;
};
