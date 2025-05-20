import React, { useEffect, useRef, useState } from "react";

import classes from "./Select.module.scss";
import { SelectProps } from "antd";

const Select = <T, K extends Extract<keyof T, string>>(props: SelectProps<T, K>) => {
      const {
    name,
    selected,
    options,
    placeholder = "Choose...",
    onChange,
    isRequired,
    errorMessage,
    label,
  } = props;


  return (
    <div>
      <div className={classes.labelRow}>
        <p>*</p>
{/* TODO: вынести в компонент */} 
        <label className={classes.label}>{label}r</label>
      </div>

      <select value={value}>
        <option value="">Choose...</option>
        <option value="male">Wizard</option>
        <option value="female">Witch</option>
        <option value="other">Fantastic beasts</option>
      </select>

{/* TODO: вынести в компонент */} 
      {isRequired && !selected && (
        <p className={classes.error}>{errorMessage}</p>
      )}
      
    </div>

    
  );
};

export default Select;
