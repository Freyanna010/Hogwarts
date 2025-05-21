import { ReactNode } from "react";

export type FieldEvent =
  React.FocusEvent<HTMLInputElement>
  | React.FocusEvent<HTMLSelectElement>;

export type FormProviderProps<T> = {
  initialValue: T;
  children: ReactNode;
};

