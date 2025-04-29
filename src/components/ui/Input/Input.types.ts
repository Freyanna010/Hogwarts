export interface InputProps {
  name: string;
  label: string;
  size?: string;
  type?: "text" | "number" | "data" | "password";
  isRequired?: boolean;
  errorMassage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
