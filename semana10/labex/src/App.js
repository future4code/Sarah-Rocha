import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AdminHomePage from "./Pages/AdminHomePage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import CreateTripPage from "./Pages/CreateTripPage";
import ListTripPage from "./Pages/ListTripPage";
import TripDetailsPage from "./Pages/TripDetailsPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <div>
      <h1>Base Labex</h1>
    </div>
  );
}

export default App