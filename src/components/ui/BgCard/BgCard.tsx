import { FC } from "react";
import clsx from "clsx";
import bg from "@assets/BG.png";

import classes from "./BgCard.module.scss";
import { BgGardProps } from "./BgCard.types";

const BgCard: FC<BgGardProps> = ({ children, className }) => {
  return (
    <div className={clsx(classes.cardBg, className)}>
      <img src={bg} className={classes.bgImg} />
      <div className={classes.content}> {children}</div>
    </div>
  );
};

export default BgCard;
