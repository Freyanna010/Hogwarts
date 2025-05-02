import { FC } from "react";
import classes from "./HogwartsLetterModal.module.scss";
import { HogwartsLetterModalProps } from "./HogwartsLetterModal.types";
import Modal from "@components/ui/Modal";
import letterImage from "@assets/letter.jpg";

const HogwartsLetterModal: FC<HogwartsLetterModalProps> = ({
  onClose,
  onGo,
  isOpen
}) => {
  return (
    <Modal
      onCancel={onClose}
      onOk={onGo}
      okButtonText="Go to Hogwarts"
      cancelButtonText="Stay in the Muggle World"
      image={letterImage}
      isOpen={isOpen}
    >
      <div className={classes.modalLetterText}>
        <p className={classes.manText}>
          We are pleased to inform you that you have been granted a place at
          Hogwarts School of Witchcraft and Wizardry.
        </p>
        <p className={classes.minText}>Yours sincerely,</p>
        <p className={classes.minText}>
          Minerva McGonagall, Deputy Headmistress!
        </p>
      </div>
    </Modal>
  );
};

export default HogwartsLetterModal;
