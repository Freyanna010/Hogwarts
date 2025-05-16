import { useState } from "react";
import { FormProviderProps } from "./FormProvider.types";
import { FormContext } from "../context";
import { InputType, NameValue } from "../types";

export const FormProvider = <T extends {}>({ initialValue, children }: FormProviderProps<T>) => {
const [formData, setFormData] = useState<T>(initialValue);
const initialEmptyState = Object.keys(initialValue).reduce((acc, key) => {
  acc[key as NameValue<T>] = false;
  return acc;
}, {} as Record<NameValue<T>, boolean>);

const [isInputEmpty, setIsInputEmpty] = useState<Record<NameValue<T>, boolean>>(initialEmptyState);

  const setFormValue = <K extends NameValue<T>>(name: K, newValue: T[K]) => {
    setIsInputEmpty((prev) => ({ ...prev, [name]: false }));
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const checkRequiredInput = (name: NameValue<T>, e: React.FocusEvent<HTMLInputElement>, type: InputType) => {
    const isEmpty = type === "checkbox" ? !e.target.checked : e.target.value.trim() === "";
    setIsInputEmpty((prev) => ({ ...prev, [name]: isEmpty }));
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormValue, checkRequiredInput, isInputEmpty }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
