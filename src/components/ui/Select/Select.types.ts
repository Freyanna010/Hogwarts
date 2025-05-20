export interface SelectProps<T, K extends Extract<keyof T, string>> {
  name: K
  selected: OptionSelect<T, K> | null;
  options: OptionSelect<T, K>[];
  placeholder?: string;
  onChange?: (value: Extract<T[K], string>) => void;
  onClose?: () => void;
  isRequired?: boolean;
  errorMessage?: string;
  size?: string;
  label?: string
}

export type OptionSelect<T, K extends  keyof T> = { title: string; value:Extract<T[K], string> };
