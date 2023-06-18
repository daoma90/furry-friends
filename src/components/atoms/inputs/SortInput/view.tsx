import React, { FC, ChangeEvent } from "react";
import { SortIcon } from "../../icons/Sort";
import { InputLabel } from "../../typography";
import * as s from "./styles";

interface InputProps {
  label: string;
  options: Array<any>;
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortInputView: FC<InputProps> = ({ label, options, onClick, onChange }) => {
  return (
    <s.Container>
      <s.LabelContainer>
        <InputLabel>{label}</InputLabel>
      </s.LabelContainer>
      <s.InputContainer>
        <s.Select onChange={onChange}>
          {options.map((option) => (
            <s.Option value={option.value}>{option.name}</s.Option>
          ))}
        </s.Select>
        <s.SortButton onClick={onClick}>
          <SortIcon />
        </s.SortButton>
      </s.InputContainer>
    </s.Container>
  );
};

export default SortInputView;
