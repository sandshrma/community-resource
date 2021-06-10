import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Search from "./Pages/SearchPatient";
import { Switch, Route } from "react-router-dom";
import Patients from "./Pages/SearchResults/PatientList.js";
import PatientInfo from "./Pages/PatientSummary/PatientInfo";

function App() {
  return (
    <div>
      <Navigation />
        <Switch>
          <Route path="/summary">
            <PatientInfo />
          </Route>
          <Route path="/search">
            <Patients />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
