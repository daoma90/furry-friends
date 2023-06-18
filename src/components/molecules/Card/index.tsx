import { useDataContext } from "@/src/context/DataContext";
import { useModalContext } from "@/src/context/ModalContext";
import { Cat } from "@/src/types/cat";
import React, { FC } from "react";
import CardView from "./view";

interface CardProps {
  cat: Cat;
}

const Card: FC<CardProps> = ({ cat }) => {
  const { removeCat } = useDataContext();
  const { openModal } = useModalContext();

  return <CardView cat={cat} removeCat={removeCat} openModal={openModal} />;
};

export default Card;
