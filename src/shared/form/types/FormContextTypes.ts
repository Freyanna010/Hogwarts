export type  InputValue =  string | number | readonly string[] | undefined;
export type  CheckedValue =  boolean | undefined

export  type FormValue =  Record<string,InputValue | CheckedValue >
export interface FormContextTypes<T extends FormValue>  {
  value: T | null;
  setFieldValue: <K extends keyof T>(name: K, newValue: InputValue | CheckedValue ) => void;
}