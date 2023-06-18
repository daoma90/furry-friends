import { createContext, FC, useContext, useState, ReactNode } from "react";
import { Cat } from "../types/cat";

type ModalContextType = {
  isOpen: boolean;
  defaultValues: Cat | null;
  modalType: string;
  openModal: (defaultValues: Cat | null) => void;
  closeModal: () => void;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  defaultValues: null,
  modalType: "add",
  openModal: () => null,
  closeModal: () => null,
});

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<Cat | null>(null);
  const [modalType, setModalType] = useState<string>("add");

  const openModal = (defaultValues: Cat | null) => {
    if (defaultValues) {
      setModalType("edit");
    } else {
      setModalType("add");
    }
    setDefaultValues(defaultValues);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    defaultValues,
    modalType,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
