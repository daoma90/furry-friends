import { useDataContext } from "@/src/context/DataContext";
import React, { FC, useState, ChangeEvent } from "react";
import SortInputView from "./view";

interface InputProps {
  label: string;
  options: Array<any>;
}

const SortInput: FC<InputProps> = ({ label, options }) => {
  const { handleSetSortType, handleSetSortDirection } = useDataContext();

  const onClick = () => {
    handleSetSortDirection();
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSetSortType(e.target.value);
  };

  return <SortInputView label={label} options={options} onClick={onClick} onChange={onChange} />;
};

export default SortInput;
