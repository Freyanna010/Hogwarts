import clsx from "clsx";
import classes from "./Input.module.scss";
import { InputProps } from "./Input.types";
import { NameValue, useFormContext } from "@shared/form";

export const Input = <T extends {}, K extends NameValue<T>>(
  props: InputProps<T>
) => {
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

  const noBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isRequired) {
      checkRequiredInput(name, e, type);
      console.log("blur handler");
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "checkbox"
        ? (e.target.checked as T[K])
        : (e.target.value as T[K]);

    setFormValue(name, newValue);
  };

  return (
    <div className={clsx(classes.inputColumn, classes[size])}>
      <div className={classes.labelRow}>
        {isRequired && <p>*</p>}
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      </div>

      <input
        name={name}
        id={name}
        type={type}
        required={isRequired}
        onBlur={noBlurHandler}
        onChange={onChangeHandler}
        className={classes.input}
        {...(type === "checkbox"
          ? { checked: formData[name] as boolean }
          : { value: formData[name] as string })}
      />

      {isInputEmpty[name] && (
        <div className={classes.error}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
