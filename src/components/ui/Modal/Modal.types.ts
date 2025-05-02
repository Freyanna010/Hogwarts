import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  onOk: () => void;
  onCancel: () => void;
  image?: string
  okButtonText?: string;
  cancelButtonText?: string;
}
