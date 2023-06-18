/* eslint-disable react/display-name */
import React, { FC } from "react";
import { InputLabel } from "../../typography";
import * as s from "./styles";

interface InputProps {
  label: string;
  options: Array<any>;
}

const Select: FC<InputProps> = React.forwardRef(({ label, options, ...rest }, ref: any) => {
  return (
    <s.InputContainer>
      <InputLabel>{label}</InputLabel>
      <s.Select ref={ref} {...rest}>
        {options.map((option) => (
          <s.Option key={option.value} value={option.value}>
            {option.label}
          </s.Option>
        ))}
      </s.Select>
    </s.InputContainer>
  );
});

export default Select;
