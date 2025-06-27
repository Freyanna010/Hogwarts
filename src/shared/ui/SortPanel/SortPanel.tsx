import { FC } from "react";
import SortingButton from "../SortingButton";
import classes from "./SortPanel.module.scss";
import { SortPanelProps } from "./SortPanel.types";

const SortPanel: FC<SortPanelProps> = ({ onSortClick, title }) => (
  <div className={classes.sortButtonRow}>
    <p className={classes.sortButtonTitle}>{title}</p>
    <SortingButton onSortClick={onSortClick} />
  </div>
);

export default SortPanel;
