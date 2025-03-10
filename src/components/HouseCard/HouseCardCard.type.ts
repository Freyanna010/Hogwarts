import { House } from "@types";
export interface HouseCardProps{
  house: House,
  onCardClick?: (name: string) => void
}
