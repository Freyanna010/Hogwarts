import clsx from "clsx";
import { useState } from "react";
import classes from "./Input.module.scss";
import { InputProps, NameValue } from "./Input.types";
import { useFormContext } from "@shared/form";

export const Input = <T extends {}, K extends NameValue<T>>(
  props: InputProps<T, K>
) => {
  const {
    name,
    label,
    size = "md",
    type = "text",
    isRequired = true,
    errorMessage = "Input is required",
  } = props;

  const [inputDirty, setInputDirty] = useState(false);

  const noBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const isEmpty = e.target.value.trim() === "";
    setInputDirty(isEmpty);
  };

  const { formData, setFormValue } = useFormContext<T>();

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
        <label htmlFor={String(name)} className={classes.label}>
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

      {errorMessage && isRequired && inputDirty && (
        <div className={classes.error}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
