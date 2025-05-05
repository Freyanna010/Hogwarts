export interface FormContextTypes<T> {
  value: T | null;
  setFieldValue: <K extends keyof T>(name: K, newValue: T[K]) => void;
}
