import { Button } from "antd";
import BgCard from "../BgCard";
import Input from "../Input";
import { FormStepTypes } from "./FormStep.types";
import { FC } from "react";

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
