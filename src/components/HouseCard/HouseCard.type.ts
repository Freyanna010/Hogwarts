import { House } from "@types";
export interface HouseCardProps {
  house: House;
  type?: "slider" | "banner" | "nawBar";
  onCardClick?: (nameName: string) => void;
}
