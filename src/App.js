import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Home from "./pages/Home";

import {Route, Switch} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
  }
`;

const App = () => {

  return (
    <Container>
        <GlobalStyle />
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>

    </Container>
  )
}

const Container = styled.div`

`;

export default App;
