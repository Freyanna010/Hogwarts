import { FC } from "react";
import classes from "./Letter.module.scss";
import { Button } from "antd";
import { LetterModalProps} from "./LetterModal.types";

const LetterModal: FC<LetterModalProps> = ({ onGoClick, onCloseClick }) => {
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

export default LetterModal;
