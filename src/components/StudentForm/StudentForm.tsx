import { FC, useState } from "react";
import FormStep from "@components/ui/FormStep";
import BgCard from "@components/ui/BgCard";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";

import { InitialStudentForm } from "./StudentForm.types.ts";
import FormProvider from "@shared/form/provider";

const StudentForm: FC<StudentFormProps> = ({ onAddStudent }) => {
  const [step, setStep] = useState(0);

  const initialFormData:  InitialStudentForm = {
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    house: "",
    image: "",
    patronus: "",
  };

  return (
    <FormProvider initialValue={initialFormData} >
      <BgCard>
        <FormStep
          title="So your name is, young wizard?"
          buttonText="Let the Sorting Begin"
        >
          <Input<InitialStudentForm>
            name="firstName"
            label="What is your name, young wizard?"
            size="xl"
            type="text"
            isRequired={true}
            errorMassage="Every young witch or wizard must have a name. The Sorting Hat insists!"

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
    </FormProvider>
  );
};

export default StudentForm;
