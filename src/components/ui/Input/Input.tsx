import clsx from "clsx";
import { FC, useState } from "react";

import classes from "./Input.module.scss";
import { InputProps } from "./Input.types";
import { useFormContext } from "@shared/form";


export const Input = <T, K extends keyof T>(props: InputProps<T, K>) => {
  const {
    name,
    label,
    size = "md",
    type = "text",
    isRequired = true,
    errorMassage = "Input is required",
  } = props;
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

  const onChangeHandler = (name: keyof T, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue  = e.target.value as T[K]
    setFieldValue(name,inputValue)
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
        value={value}
        type={type}
        className={classes.input}
        required={isRequired}
        onBlur={noBlurHandler}
        onChange={(e) => onChangeHandler(name, e)}
      />

      {errorMassage && isRequired && inputDirty && <div>{errorMassage}</div>}
    </div>
  );
};

export default Input;
