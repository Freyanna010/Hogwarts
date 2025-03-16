import { FC } from "react";
import classes from "./SliderHouseCard.module.scss";
import { HouseCardProps } from "../HouseCard.type";
import clsx from "clsx";

const SliderHouseCard: FC<Omit<HouseCardProps, "type">> = ({
  house,
  onCardClick,
  className,
}) => {
  const { id, name, img } = house;

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(name);
    }
  };

  return (
    <div
      key={id}
      className={clsx(classes.houseCard, className)}
      onClick={handleCardClick}
    >
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default SliderHouseCard;
