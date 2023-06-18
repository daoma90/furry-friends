import { inputStyle } from "@/src/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const LabelContainer = styled.div`
  width: max-content;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Select = styled.select`
  ${inputStyle}
  width: 200px;
  margin-top: 0;
  appearance: none;
`;

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 5px;
  top: 10px;
  cursor: pointer;
`;

export const Option = styled.option`
  ${inputStyle}
`;
