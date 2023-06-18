import { breakpoints } from "@/src/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
  flex: 1;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-end;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${breakpoints.laptopM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
