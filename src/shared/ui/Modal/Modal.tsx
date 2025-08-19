import { FC, useRef } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import letter from "@assets/letter.jpg";
import clsx from "clsx";
import { useClickOutside } from "@shared/hooks/useClickOutside";

import { ModalProps } from "./Modal.types";
import classes from "./Modal.module.scss";
import CustomButton from "../CustomButton";
import { useScrollLock } from "@shared/hooks";

import { createPortal } from "react-dom";

const Modal: FC<ModalProps> = ({
  onOk,
  onCancel,
  image,
  okButtonText = "Ok",
  cancelButtonText = "Cancel",
  children,
  isOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onCancel, isOpen);
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modalContainer} ref={modalRef}>
        {image && <img src={image} className={classes.modalImage} />}

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
    </div>,
    document.body // или document.getElementById("modal-root")!
  );
};


export default Modal;
