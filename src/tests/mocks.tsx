import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../services/store";
import { defaultTheme } from "../styles/themes";

interface MockWrapperProps {
  children: React.ReactNode;
}

export const MockWrapper = ({ children }: MockWrapperProps) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </Provider>
    </>
  );
};
