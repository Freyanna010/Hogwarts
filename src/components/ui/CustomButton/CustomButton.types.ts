
export type ButtonType = "primary" | "default" | "ghost" | "danger" | "link" | "icon";
export type ButtonSize = "large" | "middle" | "small";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnType?: ButtonType;
  size?: ButtonSize;
  className?: string;
   icon?: React.ReactNode;
}