/* eslint-disable react/display-name */
import React, { FC } from "react";
import { InputLabel } from "../../typography";
import * as s from "./styles";

interface InputProps {
  label: string;
}

const Input: FC<InputProps> = React.forwardRef(({ label, ...rest }, ref: any) => {
  return (
    <s.InputContainer>
      <InputLabel>{label}</InputLabel>
      <s.Input ref={ref} type="text" {...rest} />
    </s.InputContainer>
  );
});

export default Input;
