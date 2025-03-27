import { FC } from "react";
import classes from "./PopupMenu.module.scss";
import { PopupMenuProps } from "./PopupMenu.types";

const PopupMenu: FC<PopupMenuProps> = ({ children }) => {
  return <div className={classes.popupMenuContainer}>{children}</div>;
};

export default PopupMenu;
