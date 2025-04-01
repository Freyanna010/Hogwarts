import { House } from "@types";

export type HouseCardType = "slider" | "banner" | "popupMenu";

export interface HouseCardProps {
  className?: string;
  house: House;
  type: HouseCardType;
  onCardClick?: (nameName: string) => void;
}
