import React, { FC } from "react";
import { HouseCardProps } from "./HouseCard.type";
import SliderHouseCard from "./SliderHouseCard/SliderHouseCard";

const HouseCard: FC<HouseCardProps> = ({ house, onCardClick, type }) => {
  switch (type) {
    case "slider":
      return <SliderHouseCard house={house} onCardClick={onCardClick} />;

    default:
      return null;
  }
};

export default HouseCard;
