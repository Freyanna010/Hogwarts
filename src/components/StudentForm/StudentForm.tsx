import { FC, useState } from "react";
import FormStep from "@components/ui/FormStep";
import BgCard from "@components/ui/BgCard";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";
import hatImg from "@assets/hat.png";
import classes from "./StudentForm.module.scss";

import { StudentFormValue } from "./StudentForm.types.ts";
import FormProvider from "@shared/form/provider";
import AnimatedImage from "@components/ui/AnimatedImage/AnimatedImage.tsx";

const StudentForm: FC = () => {
  const [step, setStep] = useState(1);

  const initialFormData: StudentFormValue = {
    firstName: "",
    lastName: "",
    gender: null,
    house: "",
    dateOfBirth: "",
    wizard: true
  };

  const handelNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <FormProvider initialValue={initialFormData}>
      {step === 1 && (
        <BgCard className={classes.bgGard}>
          <FormStep
            title="Let's get to know each other, young wizard!"
            buttonText="Next. To the Patronus!"
            className={classes.formStep}
            onClick={handelNextStep}
          >
            <Input<StudentFormValue, "firstName">
              name="firstName"
              label="What is your name, young wizard?"
              size="xl"
              type="text"
              isRequired={true}
              errorMessage="Every young witch or wizard must have a name. The Sorting Hat insists!"
            />
            <Input<StudentFormValue, "lastName">
              name="lastName"
              label="And the last name?"
              size="xl"
              type="text"
              isRequired={true}
              errorMessage="Hogwarts records demand a full name for entry."
            />
            <Input<StudentFormValue, "dateOfBirth">
            name="dateOfBirth"
            label="Well us the date the stars wrote your name"
            size="xl"
            type="date"
            isRequired={true}
            errorMessage="Even Voldemort has a birthday. So must you."
/>
            <Select
            options={[
    { title: "Wizard", value: "male" },
    { title: "Witch", value: "female" },
    { title: "Other", value: "other" },]}

             />
          </FormStep>

          {step === 1 && (
            <AnimatedImage
              src={hatImg}
              type="swing"
              className={classes.hatImg}
            />
          )}
        </BgCard>
      )}

      {step === 2 && (
        <BgCard className={classes.bgGard}>
          <FormStep
            title="Summon your Patronus"
            buttonText="To the Sorting Ceremony"
            className={classes.formStep}
            onClick={handelNextStep}
          >
            <p>выбрать патронуса</p>
          </FormStep>
        </BgCard>
      )}

      {step === 3 && (
        <BgCard className={classes.bgGard}>
          <FormStep
            title="Sorting Ceremony Awaits"
            buttonText="Let the Hat Decide!"
            className={classes.formStep}
            onClick={() => {
              console.log("Sorted! 🎓");
            }}
          >
            <p>Здесь будет тест распределения по факультетам.</p>
          </FormStep>
        </BgCard>
      )}
    </FormProvider>
  );
};


export default StudentForm;
