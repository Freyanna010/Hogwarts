import { useFormContext } from "@shared/form";
import classes from "./Select.module.scss";
import { SelectProps } from "./Select.types";

const Select = <T, K extends Extract<keyof T, string>>(
  props: SelectProps<T, K>
) => {
  const {
    name,
    options,
    placeholder = "Choose...",
    isRequired = false,
    errorMessage,
    label,
  } = props;

  const { formData, setFormValue, checkRequiredField, isFieldEmpty} = useFormContext<T>();
  const value = formData[name] as string;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as T[K];
    setFormValue(name, newValue);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (isRequired) {
      checkRequiredField(name, e);
    }
  };

  return (
    <div>
      <div className={classes.labelRow}>
        <p>*</p>
        {/* TODO: вынести в компонент */}
        <label className={classes.label}>{label}</label>
      </div>

      <select value={value} onChange={handleChange} onBlur={handleBlur}>
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option value={option.value}>{option.title}</option>
        ))}
      </select>

      {/* TODO: вынести в компонент */}
            {isFieldEmpty[name] && (
        <div className={classes.error}>{errorMessage}</div>
      )}
 
    </div>
  );
};

export default Select;
