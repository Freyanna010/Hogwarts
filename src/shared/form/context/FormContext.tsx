import { createContext } from "react";
import { FormContextTypes } from "../types/FormContextTypes";

export const FormContext = createContext<FormContextTypes<unknown> | null>(
  null,
);
