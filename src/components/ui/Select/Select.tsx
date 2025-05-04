import React, { useEffect, useRef, useState } from "react";

import classes from "./Select.module.scss";

const Select = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target;

      if (target instanceof Node && !rootRef.current?.contains(target)) {
        if (isOpen) {
          // onClose?.();
        }
        setIsOpen(false);
      }

      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setValue(value);
  };
  return (
    <div ref={rootRef}>
      <div className={classes.labelRow}>
        <p>*</p>

        <label className={classes.label}>Сhoose a gender</label>
      </div>

      <select value={value} onChange={handleChange}>
        <option value="">Choose...</option>
        <option value="wizard">Wizard</option>
        <option value="witch">Witch</option>
        <option value="fantasticBeasts">Fantastic beasts</option>
      </select>
    </div>
  );
};

export default Select;
