import clsx from "clsx";
import { FC, useState } from "react";

import classes from "./Input.module.scss";
import { InputProps } from "./Input.types";


const Input: FC<InputProps> = (props) => {
  const {
    name,
    onChange,
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputDirty) {
      setInputDirty(false);
    } else {
      onChange(e);
    }
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
