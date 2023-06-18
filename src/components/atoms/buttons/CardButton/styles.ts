import styled from "styled-components";

export const Container = styled.button`
  border: none;
  width: 100%;
  height: 300px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.utils.borderRadius};
  border: 3px solid ${(props) => props.theme.colors.secondary};
  background-color: transparent;
`;
