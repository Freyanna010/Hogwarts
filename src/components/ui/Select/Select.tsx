import React, { useEffect, useRef, useState } from "react";

import classes from "./Select.module.scss";
import { SelectProps } from "antd";

const Select = <T, K extends keyof T>(props: SelectProps<T, K extends Extract<keyof T, string>>) => {
  



  return (
    <div>
      <div className={classes.labelRow}>
        <p>*</p>

        <label className={classes.label}>Сhoose a gender</label>
      </div>

      <select value={value}>
        <option value="">Choose...</option>
        <option value="male">Wizard</option>
        <option value="female">Witch</option>
        <option value="other">Fantastic beasts</option>
      </select>
    </div>
  );
};

export default Select;
