import React, { FC } from "react";
import { ButtonLabel } from "../../typography";
import * as s from "./styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const MainButton: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <s.ButtonContainer onClick={onClick}>
      <ButtonLabel color="secondaryText">{label}</ButtonLabel>
    </s.ButtonContainer>
  );
};

export default MainButton;
