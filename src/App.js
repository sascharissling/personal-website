import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import Footer from "./components/Footer";

//STYLE start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: #343434;
  line-height: 1rem;
`;
//STYLE end

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Headline>Sascha Rissling</Headline>
      <p>Web Developer & Music Producer</p>
      <Footer />
    </AppContainer>
  );
}

export default App;
