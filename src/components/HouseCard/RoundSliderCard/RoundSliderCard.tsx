import { FC } from "react";
import clesses from "./RoundSliderCard.module.scss"

const HouseCard: FC<HouseCardProps> = ({ house, onCardClick}) => {
  const {id, name, img} = house

  const handleCardClick =  () => {
    if(onCardClick) {
      onCardClick(id);
    }
  }

  return (
    <div key={id} className={classes.houseCard} onClick={handleCardClick}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default HouseCard;
