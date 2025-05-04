import { FC, useState } from "react";
import FormStep from "@components/ui/FormStep";
import BgCard from "@components/ui/BgCard";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";

import { StudentFormProps } from "./StudentForm.types";

const StudentForm: FC<StudentFormProps> = ({ onAddStudent }) => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    house: "",
    image: "",
    patronus: "",
  });

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <BgCard>
        <FormStep
          title="So your name is, young wizard?"
          buttonText="Let the Sorting Begin"
        >
          <Input
            name="firstName"
            label="What is your name, young wizard?"
            size="xl"
            type="text"
            isRequired={true}
            errorMassage="Every young witch or wizard must have a name. The Sorting Hat insists!"
            onChange={handelOnChange}
          />

          <Input
            name="lastName"
            label="And the last name?"
            size="xl"
            type="text"
            isRequired={true}
            errorMassage="Hogwarts records demand a full name for entry."
            onChange={handelOnChange}
          />

          <Select />
        </FormStep>
      </BgCard>
    </>
  );
};

export default StudentForm;
