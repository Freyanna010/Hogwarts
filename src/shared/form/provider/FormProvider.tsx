import { useState } from "react";

import { FormProviderProps } from "./FormProvider.types";
import { FormContext } from "../context";

export const FormProvider = <T extends {}>({
  initialValue,
  children,
}: FormProviderProps<T>) => {
  const [formData, setFormData] = useState<T>(initialValue);

  const setFormValue = <K extends keyof T>(name: K, newValue: T[K]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const Context = FormContext<T>();

  return (
    <Context.Provider value={{ formData, setFormValue }}>
      {children}
    </Context.Provider>
  );
};

export default FormProvider;
