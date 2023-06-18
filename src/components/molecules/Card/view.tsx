import { Cat } from "@/src/types/cat";
import Image from "next/image";
import React, { FC } from "react";
import { DeleteIcon } from "../../atoms/icons/Delete";
import { EditIcon } from "../../atoms/icons/Edit";
import { Body, CardTitle } from "../../atoms/typography";
import * as s from "./styles";

interface CardProps {
  cat: Cat;
  removeCat: (catId: number) => void;
  openModal: (cat: Cat) => void;
}

const CardView: FC<CardProps> = ({ cat, removeCat, openModal }) => {
  return (
    <s.CardContainer>
      <s.ImageContainer>
        <Image src={cat.image} fill style={{ objectFit: "cover" }} alt="" />
      </s.ImageContainer>
      <s.InfoContainer>
        <s.CardHeader>
          <CardTitle>{cat.name}</CardTitle>
          <s.ActionsContainer>
            <s.ActionButton onClick={() => openModal(cat)}>
              <EditIcon />
            </s.ActionButton>
            <s.ActionButton onClick={() => removeCat(cat.id)}>
              <DeleteIcon />
            </s.ActionButton>
          </s.ActionsContainer>
        </s.CardHeader>
        <Body>Gender: {cat.gender.charAt(0).toUpperCase() + cat.gender.slice(1)}</Body>
        <Body>Date of birth: {cat.birthdate}</Body>
        <Body>{cat.bio}</Body>
      </s.InfoContainer>
    </s.CardContainer>
  );
};

export default CardView;
