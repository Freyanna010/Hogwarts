export interface FormStepTypes {
  title?: string;
  buttonText?: string;
  children: React.ReactNode;
  className?: string
  onClick: () => void
}
