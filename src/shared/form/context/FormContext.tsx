import { createContext } from "react"
import { FormContextValues } from "../types";

 export const FormContext = <T extends {}> () => {
    const InitialFormValue: T = {} as T

  return createContext<FormContextValues<T>>({
    formData: InitialFormValue,
    setFormValue: () => {},
  });
}



