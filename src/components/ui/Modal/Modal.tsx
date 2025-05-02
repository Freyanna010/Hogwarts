import { FC } from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import letter from "@assets/letter.jpg";
import clsx from "clsx";

import { ModalProps } from "./Modal.types";
import classes from "./Modal.module.scss";

const Modal: FC<ModalProps> = ({ onOk, onCancel, image, okButtonText="Ok", cancelButtonText="Cancel", children}) => {
  return (
    <div className={classes.overlay} onClick={onCancel}>
      {/* TODO: добавит хук для закрытия */}
      <div
        className={classes.modalLetterContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {image && <img src={letter} className={classes.modalLetterImage} />}

        <div className={classes.modalLetterContent}>
          <Button
            className={classes.closeButton}
            type="text"
            onClick={onCancel}
            icon={<CloseCircleOutlined className={classes.closeButtonIcon} />}
          />



          {children}

          <Button
            type="primary"
            className={clsx(classes.buttons, classes.primaryButton)}
            onClick={onOk}
          >
          {cancelButtonText}
          </Button>
          <Button
            type="primary"
            className={clsx(classes.buttons, classes.primaryButton)}
            onClick={onOk}
          >
          {okButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
