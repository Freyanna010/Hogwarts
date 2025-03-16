import { House } from "@types";
export interface HouseCardProps {
  className?: string;
  house: House;
  type: "slider" | "banner" | "nawBar";
  onCardClick?: (nameName: string) => void;
}
