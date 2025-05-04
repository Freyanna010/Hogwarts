export interface FormContextTypes<T> {
  value: T;
  setFieldValue: <K extends keyof T>(name: K, newValue: T[K]) => void;
}
