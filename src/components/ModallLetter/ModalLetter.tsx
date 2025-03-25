import { FC } from "react";
import classes from "./MadalLetter.module.scss";
import { Button } from "antd";
import { ModalLetterProps } from "./ModalLetter.types";

const ModalLetter: FC<ModalLetterProps> = ({ onGoClick, onCloseClick }) => {
  return (
    <div className={classes.overlay} onClick={onCloseClick}>
      <div className={classes.modalLetterContainer}>
        <div className={classes.modalContent}>
          <p> хатите в хогравст?</p>
          <Button className={classes.button} onClick={onGoClick}>
            Go to Hogwarts
          </Button>
          <Button className={classes.button} onClick={onCloseClick}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLetter;
