import { useDataContext } from "@/src/context/DataContext";
import React from "react";
import GridView from "./view";

const Grid = () => {
  const { catsToRender } = useDataContext();
  return (
    <GridView
      catsToRender={catsToRender}
      options={[
        { name: "Name", value: "name" },
        { name: "Gender", value: "gender" },
      ]}
    />
  );
};

export default Grid;
