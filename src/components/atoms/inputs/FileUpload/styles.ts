import { inputStyle } from "@/src/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Uploader = styled.button<{ showBorder: boolean }>`
  ${inputStyle}
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: ${(props) =>
    props.showBorder ? `1px solid lightgray ${props.theme.colors.secondary}` : "none"};
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const TextBackground = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: ${(props) => props.theme.utils.borderRadius};
`;
