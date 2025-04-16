import { Card } from "antd";
import { FC } from "react";
import classes from "./BgCard.module.scss";
import { BgGardProps } from "./BgCard.types";
import clsx from "clsx";

const BgCard: FC<BgGardProps> = ({ children, className }) => {
  return <Card className={clsx(classes.cardBg, className)}>{children}</Card>;
};

export default BgCard;
