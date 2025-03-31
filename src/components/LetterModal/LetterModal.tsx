import { FC } from "react";
import classes from "./LetterModal.module.scss";
import { Button } from "antd";
import { LetterModalProps } from "./LetterModal.types";
import AnimatedImage from "@components/ui/AnimatedImage";
import letter from "@assets/letter.jpg";
import clsx from "clsx";

const LetterModal: FC<LetterModalProps> = ({ onGoClick, onCloseClick }) => {
  return (
    <div className={classes.overlay} onClick={onCloseClick}>
      <div
        className={classes.modalLetterContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatedImage
          type="zoom"
          src={letter}
          className={classes.modalLetterImage}
        />

        <div className={classes.modalLetterContent}>
          <div className={classes.modalLetterText}>
            <p className={classes.manText}>
              We are pleased to inform you that you have been granted a place at
              Hogwarts School of Witchcraft and Wizardry
            </p>
            <p className={classes.minText}> Yours sincerely, </p>
            <p className={classes.minText}>
              {" "}
              Minerva McGonagall, Deputy Headmistress!{" "}
            </p>
          </div>

          <div className={classes.modalLetterButtonsRow}>
            <Button
              type="primary"
              className={clsx(classes.buttons,classes.primaryButton )}
              onClick={onGoClick}
            >
              Go to Hogwarts
            </Button>
            <Button  className={clsx(classes.buttons,classes.defaultButton )} onClick={onCloseClick} >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
