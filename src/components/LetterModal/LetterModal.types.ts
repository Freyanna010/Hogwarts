import { ReactNode } from "react";

export interface LetterModalProps {
  children?: ReactNode;
  onGoClick: () => void;
  onCloseClick: () => void;
}
