import React from "react";

//STYLE imports
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import theme from "./utils/theme";

//COMPONENTS import
import Footer from "./components/Footer";
import PageMain from "./components/PageMain";
import ImpressumLink from "./components/Impressum";

//STYLE start

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

//STYLE end

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        <PageMain />
        <Footer />
        <ImpressumLink />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
