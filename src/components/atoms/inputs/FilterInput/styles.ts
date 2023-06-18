import { inputStyle } from "@/src/theme";
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  ${inputStyle}
  padding-right: 40px;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 16px;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 10px;
  top: 15px;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;
