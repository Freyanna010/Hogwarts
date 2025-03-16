import { ReactElement } from "react";

export interface SliderProps {
  children: ReactElement[];
  className?: string;
  autoSwitch?: boolean;
  switchTimer?: number | null;
}