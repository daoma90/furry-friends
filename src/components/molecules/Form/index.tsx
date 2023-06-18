import { useDataContext } from "@/src/context/DataContext";
import { useModalContext } from "@/src/context/ModalContext";
import { Cat } from "@/src/types/cat";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import MainButton from "../../atoms/buttons/MainButton";
import SecondaryButton from "../../atoms/buttons/SecondaryButton";
import DateInput from "../../atoms/inputs/DateInput";
import FileUpload from "../../atoms/inputs/FileUpload";
import Input from "../../atoms/inputs/Input";
import Select from "../../atoms/inputs/SelectInput";
import Textarea from "../../atoms/inputs/TextareaInput";
import * as s from "./styles";

interface FormProps {
  defaultValues: Cat | null;
  formType: string;
}

type FormValues = {
  name: string;
  birthdate: string;
  gender: string;
  bio: string;
  image: any;
};

const Form: FC<FormProps> = ({ defaultValues, formType }) => {
  const { register, handleSubmit, reset, control, setValue } = useForm<FormValues>({
    defaultValues: { ...defaultValues },
  });
  const { addCat, editCat } = useDataContext();
  const { closeModal } = useModalContext();

  const onSubmit = handleSubmit((data) => {
    console.log("data", data.image);

    if (formType == "add") {
      addCat({
        ...data,
        id: Date.now(),
      });
    } else {
      editCat({
        ...data,
        id: defaultValues!.id,
      });
    }
    reset();
    closeModal();
  });

  return (
    <s.FormContainer onSubmit={onSubmit}>
      <Input label="Name" {...register("name")} />
      <DateInput label="Birth date" {...register("birthdate")} />
      <Select
        label="Gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        {...register("gender")}
      />
      <Textarea label="Bio" {...register("bio")} />
      <FileUpload name="image" control={control} setValue={setValue} />
      <s.ButtonContainer>
        <SecondaryButton label="Cancel" onClick={closeModal} />
        <MainButton label={formType == "add" ? "Add" : "Update"} />
      </s.ButtonContainer>
    </s.FormContainer>
  );
};

export default Form;
