import { Cat } from "@/src/types/cat";
import React, { FC } from "react";
import { Body, ModalTitle, Title } from "../../atoms/typography";
import Form from "../../molecules/Form";
import * as s from "./styles";

interface ModalProps {
  isOpen: boolean;
  defaultValues: Cat | null;
  modalType: string;
  closeModal: () => void;
}

const ModalView: FC<ModalProps> = ({ isOpen, defaultValues, modalType, closeModal }) => {
  return (
    <s.Overlay
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <s.ModalContainer
        initial={{ y: 100, opacity: 0 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTitle>{modalType == "add" ? "Add kitty" : "Edit kitty"}</ModalTitle>
        <Form defaultValues={defaultValues} formType={modalType} />
      </s.ModalContainer>
    </s.Overlay>
  );
};

export default ModalView;
