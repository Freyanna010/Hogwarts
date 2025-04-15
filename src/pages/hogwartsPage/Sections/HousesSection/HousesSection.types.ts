import { House } from "@types";

export interface HousesSectionProps {
  onCardClick: (houseName: string) => void;
  houses: House[];
}
