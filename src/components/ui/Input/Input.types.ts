export type NameValue<T> = Extract<keyof T, string>
export interface InputProps<T, К extends NameValue<T> > {
  name: К;
  label: string;
  size?: string;
  type?: "text" | "number" | "data" | "password" | "checkbox";
  isRequired?: boolean;
  errorMassage: string;
}
