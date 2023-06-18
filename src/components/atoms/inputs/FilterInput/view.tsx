import React, { FC, ChangeEvent } from "react";
import { DeleteIcon } from "../../icons/Delete";
import { SearchIcon } from "../../icons/Search";
import * as s from "./styles";

interface InputProps {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  clearFilter: () => void;
}

const FilterInputView: FC<InputProps> = ({ label, onChange, filter, clearFilter }) => {
  return (
    <s.InputContainer>
      <s.Input value={filter} placeholder={label} type="text" onChange={onChange} />
      {filter ? (
        <s.IconButton onClick={clearFilter}>
          <DeleteIcon />
        </s.IconButton>
      ) : (
        <s.IconContainer>
          <SearchIcon />
        </s.IconContainer>
      )}
    </s.InputContainer>
  );
};

export default FilterInputView;
