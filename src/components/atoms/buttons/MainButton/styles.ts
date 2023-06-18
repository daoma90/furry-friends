import { breakpoints } from "@/src/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const ButtonContainer = styled(m.button)`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;

  ${breakpoints.tablet} {
    width: auto;
  }
`;
