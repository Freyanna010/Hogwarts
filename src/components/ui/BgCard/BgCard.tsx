import { Card } from "antd";
import { FC } from "react";
import clsx from "clsx";

import classes from "./BgCard.module.scss";
import { BgGardProps } from "./BgCard.types";

const BgCard: FC<BgGardProps> = ({ children, className }) => {
  return <Card className={clsx(classes.cardBg, className)}>{children}</Card>;
};

export default BgCard;
