import { useContext } from "react";
import { FormContext } from "../context";
import { FormContextValues } from "../types";

export const useFormContext = <T, >() => {
  // TODO: типизируется тут
  const context = useContext(FormContext) as FormContextValues<T>;

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};