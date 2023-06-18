import { inputStyle } from "@/src/theme";
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  ${inputStyle}
  height: 200px;
  max-width: 100%;
`;
