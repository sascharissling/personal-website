import React from "react";
import { Switch, Route } from "react-router-dom";

//STYLE imports
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import theme from "./utils/theme";

//COMPONENTS import
import Footer from "./components/Footer";
import PageMain from "./components/PageMain";
import Impressum from "./pages/Impressum";
import Legal from "./components/Legal";
import MusicProducer from "./pages/MusicProducer";
// import WebDeveloper from "./pages/WebDeveloper";

//STYLE start

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

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
      <GlobalStyles />
      <AppContainer>
          <Switch>
            <Route path="/" exact component={PageMain} />
            <Route path="/impressum" component={Impressum} />
            {/* <Route path="/webdev" component={WebDeveloper} /> */}
            <Route path="/prod" component={MusicProducer} />
          </Switch>
          <Footer />
          <Legal />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
