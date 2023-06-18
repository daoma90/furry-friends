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
`;

export const ModalContainer = styled(m.div)`
  width: 50vh;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: ${(props) => props.theme.utils.borderRadius};
`;
