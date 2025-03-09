import { FC } from "react";
import classes from "./HouseCard.module.scss";
import { HouseCardProps } from "./HouseCardCard.type";

const HouseCard: FC<HouseCardProps> = ({ id, name, img, onClick }) => {
  return (
    <div key={id} className={classes.houseCard} onClick={onClick}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default HouseCard;
