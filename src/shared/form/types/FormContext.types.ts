export type NameValue<T> = Extract<keyof T, string>;
export type InputType= "text" | "number" | "date" | "password" | "checkbox";
export interface FormContextValues<T> {
  formData: T;
  setFormValue: <K extends NameValue<T>>(name: K, newValue: T[K]) => void;
  checkRequiredInput: (
    name: NameValue<T>,
    e: React.FocusEvent<HTMLInputElement>,
    type: InputType
  ) => void;
  isInputEmpty: Record<NameValue<T>, boolean>;
}
