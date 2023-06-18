import React, { FC, useState } from "react";
import SecondaryButtonView from "./view";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const SecondaryButton: FC<ButtonProps> = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleSetHovered = (isHovered: boolean) => {
    setIsHovered(isHovered);
  };

  return (
    <SecondaryButtonView
      label={label}
      onClick={onClick}
      isHovered={isHovered}
      handleSetHovered={handleSetHovered}
    />
  );
};

export default SecondaryButton;
