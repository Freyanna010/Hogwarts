import { House } from "@store/data";

export type HouseCardProps = Omit<House, "id"> & {
  id: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};
