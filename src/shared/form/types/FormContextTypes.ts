export interface FormContextValues<T> {
  formData: T;
  setFormValue: <K extends keyof T>(name: K, newValue: T[K]) => void;
}