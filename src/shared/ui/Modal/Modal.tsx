import { FC, useRef } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import letter from "@assets/letter.jpg";
import clsx from "clsx";
import { useClickOutside } from "@shared/hooks/useClickOutside";

import { ModalProps } from "./Modal.types";
import classes from "./Modal.module.scss";
import CustomButton from "../CustomButton";
import { useScrollLock } from "@shared/hooks";

const Modal: FC<ModalProps> = ({
  onOk,
  onCancel,
  image,
  okButtonText = "Ok",
  cancelButtonText = "Cancel",
  children,
  isOpen,
}) => {

  const ModalContainerRef = useRef<HTMLDivElement>(null);


  useClickOutside(ModalContainerRef, onCancel, isOpen);
  useScrollLock(isOpen)

  return (
    <div className={classes.overlay}>
      <div
        className={classes.modalContainer}
        onClick={(e) => e.stopPropagation()}
        ref={ModalContainerRef}
      >
        {image && <img src={letter} className={classes.modalImage} />}

        <div className={classes.modalContent}>
          <CustomButton
            className={classes.closeButton}
            btnType="icon"
            onClick={onCancel}
            icon={<CloseCircleOutlined className={classes.closeButtonIcon} />}
          />

          {children}

          <div className={classes.rowButton}>
            <CustomButton
              className={clsx(classes.buttons, classes.primaryButton)}
              onClick={onOk}
              btnType="primary"
            >
              {okButtonText}
            </CustomButton>

            <CustomButton
              className={clsx(classes.buttons, classes.secondaryButton)}
              onClick={onCancel}
              btnType="default"
            >
              {cancelButtonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
