import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { store } from "./services/store";
import { LandingPage } from "./components/templates/LandingPage";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <LandingPage />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </>
  );
};
