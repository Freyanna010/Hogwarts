import { FC, useRef } from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import letter from "@assets/letter.jpg";
import clsx from "clsx";
import { useClickOutside } from "@shared/hooks/useClickOutside";

import { ModalProps } from "./Modal.types";
import classes from "./Modal.module.scss";

const Modal: FC<ModalProps> = ({
  onOk,
  onCancel,
  image,
  okButtonText = "Ok",
  cancelButtonText = "Cancel",
  children,
  isOpen,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onCancel, isOpen);
  return (
    <div className={classes.overlay}>
      <div
        className={classes.modalContainer}
        onClick={(e) => e.stopPropagation()}
        ref={ref}
      >
        {image && <img src={letter} className={classes.modalImage} />}

        <div className={classes.modalContent}>
          <Button
            className={classes.closeButton}
            type="text"
            onClick={onCancel}
            icon={<CloseCircleOutlined className={classes.closeButtonIcon} />}
          />

          {children}

          <div className={classes.rowButton}>
            <button
              className={clsx(classes.buttons, classes.primaryButton)}
              onClick={onOk}
            >
              {okButtonText}
            </button>

            <button
              className={clsx(classes.buttons, classes.secondaryButton)}
              onClick={onCancel}
            >
              {cancelButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
