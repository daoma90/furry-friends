import { colors } from "@/src/theme";
import React, { FC } from "react";
import { ButtonLabel } from "../../typography";
import * as s from "./styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const MainButton: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <s.ButtonContainer
      onClick={onClick}
      initial={{ backgroundColor: colors.primary }}
      whileHover={{ backgroundColor: colors.primaryDarker }}
    >
      <ButtonLabel color="secondaryText">{label}</ButtonLabel>
    </s.ButtonContainer>
  );
};

export default MainButton;
