import Image from "next/image";
import React, { FC } from "react";
import { Body, InputLabel } from "../../typography";
import * as s from "./styles";

interface FileUploadProps {
  value: string;
  onClick: () => void;
  handleDrag: any;
  handleDrop: any;
  dragActive: boolean;
}

const FileUploadView: FC<FileUploadProps> = ({ value, onClick, handleDrag, handleDrop }) => {
  return (
    <s.Container
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <InputLabel>Image</InputLabel>
      <s.Uploader showBorder={value ? false : true} onClick={onClick} type="button">
        <s.PreviewContainer>
          {value && <Image src={value} fill style={{ objectFit: "cover" }} alt="" />}
        </s.PreviewContainer>
        <s.TextContainer>
          <s.TextBackground>
            <Body>Drop image here, or click to select</Body>
          </s.TextBackground>
        </s.TextContainer>
      </s.Uploader>
    </s.Container>
  );
};

export default FileUploadView;
