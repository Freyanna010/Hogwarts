import { FC } from "react";
import classes from "./SliderHouseCard.module.scss";
import { HouseCardProps } from "../HouseCard.type";

const SliderHouseCard: FC<HouseCardProps> = ({ house, onCardClick }) => {
  const { id, name, img } = house;

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(name);
    }
  };

  return (
    <div key={id} className={classes.houseCard} onClick={handleCardClick}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default SliderHouseCard;
