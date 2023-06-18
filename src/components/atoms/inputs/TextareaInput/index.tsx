import React, { FC } from "react";
import { InputLabel } from "../../typography";
import * as s from "./styles";

interface InputProps {
  label: string;
}

const Textarea: FC<InputProps> = React.forwardRef(({ label, ...rest }, ref: any) => {
  return (
    <s.InputContainer>
      <InputLabel>{label}</InputLabel>
      <s.Textarea ref={ref} rows={10} {...rest} />
    </s.InputContainer>
  );
});

export default Textarea;
