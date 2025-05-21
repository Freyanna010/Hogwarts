import { FieldEvent } from "../provider/FormProvider.types";

export type NameValue<T> = Extract<keyof T, string>;
export type InputType= "text" | "number" | "date" | "password" | "checkbox";
export interface FormContextValues<T> {
  formData: T;
  setFormValue: <K extends NameValue<T>>(name: K, newValue: T[K]) => void;
  checkRequiredField: (
    name: NameValue<T>,
    e: FieldEvent
  ) => void;
  isFieldEmpty: Record<NameValue<T>, boolean>;
}
