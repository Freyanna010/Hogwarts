import { useContext } from "react";
import { FormContext } from "../context";

export const useFormContext = <T extends {}>() => {
  const context = FormContext<T>();
  const formContext = useContext(context);

  if (!formContext) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return formContext;
};