import { useDataContext } from "@/src/context/DataContext";
import React, { FC, ChangeEvent, useState, useEffect } from "react";

import FilterInputView from "./view";

interface InputProps {
  label: string;
}

const FilterInput: FC<InputProps> = ({ label }) => {
  const { handleSetFilter } = useDataContext();
  const [filter, setFilter] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const clearFilter = () => {
    setFilter("");
  };

  useEffect(() => {
    handleSetFilter(filter);
  }, [filter]);

  return (
    <FilterInputView label={label} onChange={onChange} filter={filter} clearFilter={clearFilter} />
  );
};

export default FilterInput;
