import React from "react";

//STYLE imports
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";

//COMPONENTS import
import Footer from "./components/Footer";
import PageMain from "./components/PageMain";

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
    <AppContainer>
      <GlobalStyles />
      <PageMain />
      <Footer />
    </AppContainer>
  );
}

export default App;
