import { Button } from "antd";
import { FC } from "react";
import { FormStepTypes } from "./FormStep.types";
import classes from "./FormStep.module.scss"
import clsx from "clsx";

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
