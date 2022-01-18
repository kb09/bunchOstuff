import React from 'react';
import { Container} from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
const App = () => {
  
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar/>
        <Switch>
          
        </Switch>
        <Home/>
      </Container>
    </BrowserRouter>
  );
};

export default App;
