import clsx from "clsx";
import { FC, useState } from "react";

import classes from "./Input.module.scss";
import { InputProps, NameValue } from "./Input.types";
import { CheckedValue, InputValue, useFormContext } from "@shared/form";


export const Input = <T, K extends NameValue<T>>(props: InputProps<T, K>) => {
  const {
    name,
    label,
    size = "md",
    type = "text",
    isRequired = true,
    errorMassage = "Input is required",
  } = props;

  //TODO: вынести
  const [inputDirty, setInputDirty] = useState(false);
  const noBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const isEmpty = e.target.value.trim() === "";
    if (isEmpty) {
      setInputDirty(true);
    } else {
      setInputDirty(false);
    }
  };

  const form = useFormContext<T>()
  const {value, setFieldValue} = form

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (type === "checkbox") ? e.target.checked: e.target.value
    setFieldValue(name,inputValue)
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
      // TODO: поправить
        name={name}
        id={name}
        {...(type === "checkbox"
          ? { checked: value?.[name] as CheckedValue }
          : { value: value?.[name] as InputValue})}
        type={type}
        className={classes.input}
        required={isRequired}
        onBlur={noBlurHandler}
        onChange={onChangeHandler}
      />

      {errorMassage && isRequired && inputDirty && <div>{errorMassage}</div>}
    </div>
  );
};

export default Input;
