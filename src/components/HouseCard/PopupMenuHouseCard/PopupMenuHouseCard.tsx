import { FC } from "react";
import clsx from "clsx";

import { HouseCardProps } from "../HouseCard.type";
import classes from "./PopupMenuHouseCard.module.scss";

const PopupMenuHouseCard: FC<Omit<HouseCardProps, "type">> = (props) => {
  const { className, onCardClick, house } = props;
  const { name, emblemImg } = house;

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(name);
    }
  };

  return (
    <div className={clsx(classes.card, className)} onClick={handleCardClick}>
      <img src={emblemImg} className={classes.cardImg} />
      <h3>{name}</h3>
    </div>
  );
};

export default PopupMenuHouseCard;
