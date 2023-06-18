import React, { FC } from "react";
import Modal from "../components/organisms/Modal";
import { useModalContext } from "../context/ModalContext";
import { GlobalStyle, Theme } from "../theme";
import Container from "./container";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isOpen } = useModalContext();
  return (
    <Theme>
      <GlobalStyle />
      <Container>{children}</Container>
      {isOpen && <Modal />}
    </Theme>
  );
};

export default Layout;
