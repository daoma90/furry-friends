import { breakpoints } from "@/src/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* margin-top: 5rem; */
  margin-bottom: 5rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
