import { inter, norican, sourceSerifPro } from "@/src/theme/fonts";
import { m } from "framer-motion";
import styled from "styled-components";

export const Title = styled.h1`
  ${norican.style}

  color: ${(props) => props.theme.colors.primaryText};
  font-size: clamp(50px, 9vw, 128px);
`;

export const ModalTitle = styled.h2`
  ${sourceSerifPro.style}

  color: ${(props) => props.theme.colors.primaryText};
  font-size: 50px;
`;

export const CardTitle = styled.h3`
  ${sourceSerifPro.style}

  color: ${(props) => props.theme.colors.primaryText};
  font-size: 25px;
`;

export const Body = styled.p<{ weight?: number }>`
  ${inter.style}

  color: ${(props) => props.theme.colors.primaryText};
  font-size: 18px;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const InputLabel = styled.p`
  ${inter.style}

  color: ${(props) => props.theme.colors.primaryText};
  font-size: 18px;
`;

export const ButtonLabel = styled(m.p)<{ color: string }>`
  ${inter.style}

  color: ${(props) => props.theme.colors[props.color]};
  font-size: 18px;
`;
