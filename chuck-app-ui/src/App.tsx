import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { Home } from "./components/templates/Home";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};
