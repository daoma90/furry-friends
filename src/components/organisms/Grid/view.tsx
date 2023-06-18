import { useDataContext } from "@/src/context/DataContext";
import { Cat } from "@/src/types/cat";
import React, { FC } from "react";
import CardButton from "../../atoms/buttons/CardButton";
import FilterInput from "../../atoms/inputs/FilterInput";
import SortInput from "../../atoms/inputs/SortInput";
import Card from "../../molecules/Card";
import * as s from "./styles";

interface GridProps {
  catsToRender: Array<Cat>;
  options: Array<{ name: string; value: string }>;
}

const GridView: FC<GridProps> = ({ catsToRender, options }) => {
  return (
    <s.Container>
      <s.ActionContainer>
        <FilterInput label="Filter furries" />
        <SortInput label="Sort by: " options={options} />
      </s.ActionContainer>
      <s.StyledGrid>
        {catsToRender.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
        <CardButton />
      </s.StyledGrid>
    </s.Container>
  );
};

export default GridView;
