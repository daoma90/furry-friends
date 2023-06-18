import React, { FC } from "react";
import * as s from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <s.Container>{children}</s.Container>;
};

export default Container;
