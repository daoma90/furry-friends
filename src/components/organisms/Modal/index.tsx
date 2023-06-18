import { useModalContext } from "@/src/context/ModalContext";
import React from "react";
import ModalView from "./view";

const Modal = () => {
  const { isOpen, defaultValues, modalType, closeModal } = useModalContext();
  return (
    <ModalView
      isOpen={isOpen}
      defaultValues={defaultValues}
      modalType={modalType}
      closeModal={closeModal}
    />
  );
};

export default Modal;
