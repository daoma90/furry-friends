import { useModalContext } from "@/src/context/ModalContext";
import React from "react";
import { AddIcon } from "../../icons/Add";
import { CardTitle } from "../../typography";
import * as s from "./styles";

const CardButton = () => {
  const { openModal } = useModalContext();

  return (
    <s.Container onClick={() => openModal(null)}>
      <AddIcon />
      <CardTitle>Add a furry friend</CardTitle>
    </s.Container>
  );
};

export default CardButton;
