import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { LandingPage } from "./components/templates/LandingPage";
import { useAppSelector } from "./services/hooks";

export const App = () => {
  const { theme } = useAppSelector((state) => state.global);

  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingPage />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};
