import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 33%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.utils.borderRadius};
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 1rem;
  gap: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
