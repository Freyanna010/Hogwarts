export type NameValue<T> = Extract<keyof T, string>;

export interface InputProps<T, K extends NameValue<T>> {
  name: K;
  label: string;
  size?: string;
  type?: "text" | "number" | "date" | "password" | "checkbox";
  isRequired?: boolean;
  errorMessage: string;
}
