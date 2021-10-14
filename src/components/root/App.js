import React from "react";
import { Container } from "reactstrap";
import Navi from '../navi/Navi'
import Dashboard from "./Dashboard";
import {Switch,Route}  from 'react-router-dom'
import CartDetail from "../card/CartDetail";



function App() {
   return(
    <Container>
       <Navi />
      <Switch>
         <Route path='/' exact component={Dashboard} />
         <Route path='/cart' component={CartDetail} />
      </Switch>
    </Container>
   )
}

export default App;
