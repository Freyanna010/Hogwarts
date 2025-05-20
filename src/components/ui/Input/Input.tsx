import clsx from "clsx";
import classes from "./Input.module.scss";
import { InputProps } from "./Input.types";
import { NameValue, useFormContext } from "@shared/form";
import InputMask from "react-input-mask";

export const Input = <T, K extends NameValue<T>>(props: InputProps<T>) => {
  const {
    name,
    label,
    size = "md",
    type = "text",
    isRequired,
    errorMessage = "Input is required",
  } = props;

  const { formData, setFormValue, checkRequiredInput, isInputEmpty } =
    useFormContext<T>();

  const value = formData[name];

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isRequired) {
      checkRequiredInput(name, e, type);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "checkbox"
        ? (e.target.checked as T[K])
        : (e.target.value as T[K]);

    setFormValue(name, newValue);
  };

  const inputProps = {
    id: name,
    name,
    required: isRequired,
    onBlur: handleBlur,
    onChange: handleChange,
    className: classes.input,
    ...(type === "checkbox"
      ? { checked: value as boolean }
      : { value: value as string }),
  };

  return (
    <div className={clsx(classes.inputColumn, classes[size])}>
      <div className={classes.labelRow}>
              {/* TODO: вынести в компонент */}
        {isRequired && <p>*</p>}
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      </div>

      {type === "date" ? (
        <InputMask mask="99-99-9999" {...inputProps}>
          {(inputProps) => <input type="text" {...inputProps} />}
        </InputMask>
      ) : (
        <input type={type} {...inputProps} />
      )}

      {/* TODO: вынести в компонент */}
      {isInputEmpty[name] && (
        <div className={classes.error}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
