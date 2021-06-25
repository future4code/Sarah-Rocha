import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage/HomePage";
import AdminHomePage from "./Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "./Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripsPage from "./Pages/CreateTripsPage/CreateTripsPage";
import ListTripsPage from "./Pages/ListTripsPage/ListTripsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TripDetailsPage from "./Pages/TripDetailsPage/TripDetailsPage";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

const AppContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 16px;
   `

const App = () => {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <AppContainer>
        <Switch>
          <Route path="/criar-viagem">
          <CreateTripsPage/> 
          </Route>
          <Route path="/admin">
          <AdminHomePage/> 
          </Route>
          <Route path="/viagens">
          <ListTripsPage/> 
          </Route>
          <Route path="/login">
          <LoginPage/> 
          </Route>
          <Route path="/detalhes-viagens">
          <TripDetailsPage/> 
          </Route>
          <Route path="/inscrever">
          <ApplicationFormPage/> 
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>
        </Switch>
     </AppContainer>
     </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
