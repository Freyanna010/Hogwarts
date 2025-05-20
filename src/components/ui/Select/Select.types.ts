export interface SelectProps<T, K extends Extract<keyof T, string>> {
  name: K
  selected: Option<T, K> | null;
  options: Option<T, K>[];
  placeholder?: string;
  onChange?: (value: Extract<T[K], string>) => void;
  onClose?: () => void;
  isRequired?: boolean;
  errorMassage: string;
  size?: string;
}

type Option<T, K extends  keyof T> = { title: string; value:Extract<T[K], string> };
