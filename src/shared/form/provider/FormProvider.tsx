import { useState } from "react";
import { FieldEvent, FormProviderProps } from "./FormProvider.types";
import { FormContext } from "../context";
import { NameValue } from "../types";

export const FormProvider = <T extends {}>({
  initialValue,
  children,
}: FormProviderProps<T>) => {
  const [formData, setFormData] = useState<T>(initialValue);

  const initialIsEmptyState = Object.keys(initialValue).reduce((acc, key) => {
    acc[key as NameValue<T>] = false;
    return acc;
  }, {} as Record<NameValue<T>, boolean>);
  const [isFieldEmpty, setIsFieldEmpty] =
    useState<Record<NameValue<T>, boolean>>(initialIsEmptyState);

  const setFormValue = <K extends NameValue<T>>(name: K, newValue: T[K]) => {
    setIsFieldEmpty((prev) => ({ ...prev, [name]: false }));
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };
  const checkRequiredField = (name: NameValue<T>, e: FieldEvent) => {
    let isEmpty: boolean;
    const target = e.target;

    switch (true) {
      case target instanceof HTMLInputElement && target.type === "checkbox":
        isEmpty = !target.checked;
        break;
      case target instanceof HTMLInputElement:
        isEmpty = !target.value.trim();
        break;
      case target instanceof HTMLSelectElement:
        isEmpty = !target.value;
        break;
      default:
        isEmpty = true;
        break;
    }

    setIsFieldEmpty((prev) => ({
      ...prev,
      [name]: isEmpty,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormValue,
        checkRequiredField,
        isFieldEmpty,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
