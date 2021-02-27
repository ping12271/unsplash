import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";

import {Route, Switch} from 'react-router-dom';

const App = () => {

  return (
    <Container>
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>

    </Container>
  )
}

const Container = styled.div`

`;

export default App;
