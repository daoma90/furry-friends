import { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { inter } from "./fonts";

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 475,
  tablet: 768,
  laptop: 1025,
  laptopM: 1340,
  laptopL: 2000,
  desktop: 2600,
};

const breakpoints = {
  mobileS: `@media (min-width: ${size.mobileS}px)`,
  mobileM: `@media (min-width: ${size.mobileM}px)`,
  mobileL: `@media (min-width: ${size.mobileL}px)`,
  tablet: `@media (min-width: ${size.tablet}px)`,
  laptop: `@media (min-width: ${size.laptop}px)`,
  laptopM: `@media (min-width: ${size.laptopM}px)`,
  laptopL: `@media (min-width: ${size.laptopL}px)`,
  desktop: `@media(min-width: ${size.desktop}px)`,
  desktopL: `@media (min-width: ${size.desktop}px)`,
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: #fbfbfb;
  }


`;

const colors = {
  background: "#fbfbfb",
  primary: "#85b0c3",
  primaryDarker: "#7297a7",
  secondary: "#e5e5e5",
  primaryText: "black",
  secondaryText: "white",
  overlay: "rgba(0,0,0,0.6)",
};

const spacings = {
  contentMaxWidth: "1420px",
};

const utils = {
  borderRadius: "25px",
};

export const inputStyle = {
  height: 40,
  width: "100%",
  marginTop: 10,
  backgroundColor: "transparent",
  border: "1px solid lightgray",
  borderRadius: 5,
  padding: 10,
  ...inter.style,
};

const theme = {
  spacings,
  breakpoints,
  utils,
  colors,
};

interface ThemeProps {
  children: React.ReactNode;
}

const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme, GlobalStyle, breakpoints, size, colors, utils };
