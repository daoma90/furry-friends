import React, { FC } from "react";
import { ButtonLabel } from "../../typography";
import * as s from "./styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const SecondaryButton: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <s.ButtonContainer onClick={onClick}>
      <ButtonLabel color="primary">{label}</ButtonLabel>
    </s.ButtonContainer>
  );
};

export default SecondaryButton;
