import React from "react";
import FilterInput from "../../atoms/inputs/FilterInput";
import { Title } from "../../atoms/typography";
import * as s from "./styles";

const PageHeader = () => {
  return (
    <s.Container>
      <Title>Furry friends</Title>
    </s.Container>
  );
};

export default PageHeader;
