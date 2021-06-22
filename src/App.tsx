import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Search from "./Pages/SearchPatient";
import { Switch, Route , useLocation } from "react-router-dom";
import Patients from "./Pages/SearchResults/PatientList.js";
import PatientInfo from "./Pages/PatientSummary/PatientInfo";
import CommunityResources from "./Pages/CommunityResources/index";

function App() {
  const {pathname}=useLocation();
  console.log(pathname);
  return (
    <div>
     {
       pathname==="/summary/community-resources/refer"?<div/> :<Navigation />
     } 
      <Switch>
      <Route path="/summary/community-resources/refer">
          <CommunityResources />
        </Route>
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
