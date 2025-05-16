import { Button } from "antd";
import { FC } from "react";
import { FormStepTypes } from "./FormStep.types";
import classes from "./FormStep.module.scss"

const FormStep: FC<FormStepTypes> = ({
  title,
  children,
  buttonText = "Next",
}) => {
  return (
    <div className={classes.step} >
      <h2 className={classes.title}>{title}</h2>
      <div>{children}</div>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default FormStep;
