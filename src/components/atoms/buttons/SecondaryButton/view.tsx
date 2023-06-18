import { colors } from "@/src/theme";
import React, { FC } from "react";
import { ButtonLabel } from "../../typography";
import * as s from "./styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isHovered: boolean;
  handleSetHovered: (isHovered: boolean) => void;
}

const SecondaryButtonView: FC<ButtonProps> = ({ label, onClick, isHovered, handleSetHovered }) => {
  return (
    <s.ButtonContainer
      onClick={onClick}
      initial={{ backgroundColor: colors.background }}
      animate={
        isHovered ? { backgroundColor: colors.primary } : { backgroundColor: colors.background }
      }
      onMouseEnter={() => handleSetHovered(true)}
      onMouseLeave={() => handleSetHovered(false)}
    >
      <ButtonLabel
        color="primary"
        initial={{ color: colors.primary }}
        animate={isHovered ? { color: colors.background } : { color: colors.primary }}
      >
        {label}
      </ButtonLabel>
    </s.ButtonContainer>
  );
};

export default SecondaryButtonView;
