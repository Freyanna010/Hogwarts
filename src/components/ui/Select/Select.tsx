import { useFormContext } from "@shared/form";
import classes from "./Select.module.scss";
import { SelectProps } from "./Select.types";

const Select = <T, K extends Extract<keyof T, string>>(
  props: SelectProps<T, K>
) => {
  const {
    name,
    selected,
    options,
    placeholder = "Choose...",
    isRequired = false,
    errorMessage,
    label,
  } = props;

  const { formData, setFormValue } = useFormContext<T>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as T[K];
    setFormValue(name, newValue);
  };

  return (
    <div>
      <div className={classes.labelRow}>
        <p>*</p>
        {/* TODO: вынести в компонент */}
        <label className={classes.label}>{label}</label>
      </div>

      <select value={formData[name] as string} onChange={handleChange}>
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option value={option.value}>{option.title}</option>
        ))}
      </select>

      {/* TODO: вынести в компонент */}
      {isRequired && !selected && (
        <p className={classes.error}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;
