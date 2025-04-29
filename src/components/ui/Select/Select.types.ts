export interface SelectProps {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  // status?: 'default' | 'invalid';
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
  isRequired?: boolean;
  errorMassage: string;
  size?: string;
}

type Option = { title: string; value: string };


