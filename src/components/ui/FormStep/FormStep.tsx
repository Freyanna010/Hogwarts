import { Button } from "antd";
import { FC } from "react";
import clsx from "clsx";

import { FormStepTypes } from "./FormStep.types";
import classes from "./FormStep.module.scss"

const FormStep: FC<FormStepTypes> = ({
  title,
  children,
  buttonText = "Next",
  className,
  onClick
}) => {
  return (
    <div className={clsx(classes.step, className) } >
      <h2 className={classes.title}>{title}</h2>
      <div>{children}</div>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};

export default FormStep;
