import { DataProvider } from "@/src/context/DataContext";
import { ModalProvider } from "@/src/context/ModalContext";
import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <DataProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </DataProvider>
    </LazyMotion>
  );
}
