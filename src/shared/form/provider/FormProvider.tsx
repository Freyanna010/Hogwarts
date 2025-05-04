import { useState } from "react";

import { FormProviderProps } from "./FormProvider.types";
import { FormContext } from "../context";

export const FormProvider = <T,>({
  initialValue,
  children,
}: FormProviderProps<T>) => {
  const [value, setValue] = useState<T>(initialValue);

  const setFieldValue = <K extends keyof T>(name: K, newValue: T[K]) => {
    setValue((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  return (
    <FormContext.Provider value={{ value, setFieldValue }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
