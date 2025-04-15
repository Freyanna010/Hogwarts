import { FC } from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import letter from "@assets/letter.jpg";
import clsx from "clsx";

import { LetterModalProps } from "./LetterModal.types";
import classes from "./LetterModal.module.scss";

const LetterModal: FC<LetterModalProps> = ({ onGoClick, onCloseClick }) => {
  return (
    <div className={classes.overlay} onClick={onCloseClick}>
      <div
        className={classes.modalLetterContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={letter} className={classes.modalLetterImage} />

        <div className={classes.modalLetterContent}>
          <Button
            className={classes.closeButton}
            type="text"
            onClick={onCloseClick}
            icon={<CloseCircleOutlined className={classes.closeButtonIcon} />}
          />

          <div className={classes.modalLetterText}>
            <p className={classes.manText}>
              We are pleased to inform you that you have been granted a place at
              Hogwarts School of Witchcraft and Wizardry
            </p>
            <p className={classes.minText}> Yours sincerely, </p>
            <p className={classes.minText}>
              Minerva McGonagall, Deputy Headmistress!
            </p>
          </div>

          <Button
            type="primary"
            className={clsx(classes.buttons, classes.primaryButton)}
            onClick={onGoClick}
          >
            Go to Hogwarts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
