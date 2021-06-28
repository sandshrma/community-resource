import React from "react";
import Navigation from "../Components/Navigation";
import Search from "../Pages/SearchPatient";
import { Switch, Route, useLocation } from "react-router-dom";
import SearchResults from "../Pages/SearchResults";
import PatientInfo from "../Pages/PatientSummary/PatientInfo";

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
