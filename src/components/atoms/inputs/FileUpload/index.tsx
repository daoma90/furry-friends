import React, { useRef, FC, useState } from "react";
import FileUploadView from "./view";
import * as s from "./styles";
import { Controller } from "react-hook-form";

interface FileUploadProps {
  name: string;
  control: any;
  setValue: any;
}

const FileUpload: FC<FileUploadProps> = ({ name, control, setValue }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const onClick = () => {
    inputRef.current!.click();
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer!.files && e.dataTransfer!.files[0]) {
      handleImageConvert(e.dataTransfer!.files[0]);
    }
  };

  const handleImageConvert = (image: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      setValue(name, reader.result);
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, value, ref }, formState }) => (
        <>
          <FileUploadView
            value={value}
            onClick={onClick}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            dragActive={dragActive}
          />
          <s.UploadInput
            ref={(instance) => {
              ref(instance);
              inputRef.current = instance;
            }}
            type="file"
            onChange={(e) => {
              handleImageConvert(e.target.files![0]);
            }}
            onBlur={onBlur}
            accept="image/*"
          />
        </>
      )}
    ></Controller>
  );
};

export default FileUpload;
