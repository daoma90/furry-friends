import { breakpoints } from "@/src/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(m.div)`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.overlay};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const ModalContainer = styled(m.div)`
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: ${(props) => props.theme.utils.borderRadius};
  overflow-y: auto;
  max-height: 95vh;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoints.tablet} {
    width: 60vh;
  }

  ${breakpoints.laptop} {
    padding: 3rem;
  }
`;
