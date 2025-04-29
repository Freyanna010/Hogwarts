import { House } from "shared/types";

export interface HousesSectionProps {
  onCardClick: (houseName: string) => void;
  houses: House[];
}
