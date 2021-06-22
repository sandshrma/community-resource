import React from "react";
import Navigation from "../components/Navigation";
import Search from "../pages/SearchPatient";
import { Switch, Route, useLocation } from "react-router-dom";
import SearchResults from "../pages/SearchResults";
import PatientInfo from "../pages/PatientSummary/PatientInfo";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/summary">
          <PatientInfo />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
