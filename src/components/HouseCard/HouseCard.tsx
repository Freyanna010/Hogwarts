import { FC } from "react";
import classes from "./HouseCard.module.scss";
import { HouseCardProps } from "./HouseCardCard.type";
import { Card } from "antd";

const HouseCard: FC<HouseCardProps> = ({ id, name, img, style }) => {
  return (
    <div key={id} className={classes.houseCard}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default HouseCard;
