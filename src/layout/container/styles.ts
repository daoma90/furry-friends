import { breakpoints } from "@/src/theme";
import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;

  ${breakpoints.laptopM} {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
