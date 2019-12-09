import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//STYLE imports
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import theme from "./utils/theme";

//COMPONENTS import
import Footer from "./components/Footer";
import PageMain from "./components/PageMain";
import Impressum from "./components/Impressum";

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

const Legal = styled.div`
  position: absolute;
  bottom: 10px;
`;

const ImpressumLink = styled(Link)`
  text-decoration: none;
  color: ${theme.secondary};
  opacity: 50%;
`;
//STYLE end

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        <Router>
          <Route path="/" exact component={PageMain} />
          <Route path="/impressum" component={Impressum} />
          <Footer />
          <Legal>
            <ImpressumLink to="/impressum">Impressum</ImpressumLink>
          </Legal>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
