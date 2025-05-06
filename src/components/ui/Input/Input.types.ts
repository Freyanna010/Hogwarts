export interface InputProps<T, К extends keyof T> {
  name: keyof К;
  label: string;
  size?: string;
  type?: "text" | "number" | "data" | "password";
  isRequired?: boolean;
  errorMassage: string;
}
