import { createContext, useContext } from "react";

export const  formContext = createContext(null);

export const  useFormContext = () => {
  const  context =  useContext(formContext)

  if(!context) {
    throw new Error("useFormContext must be used inside a FormProvider");
  }

  return context
}
