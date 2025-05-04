import { Button } from "antd";
import { FC } from "react";
import { FormStepTypes } from "./FormStep.types";

const FormStep: FC<FormStepTypes> = ({
  title,
  children,
  buttonText = "Next",
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default FormStep;
