import { ReactNode } from "react";

export type FormProviderProps<T> = {
  initialValue: T;
  children: ReactNode;
};