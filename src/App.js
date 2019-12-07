import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";

//STYLE start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

//STYLE end

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
    </AppContainer>
  );
}

export default App;
