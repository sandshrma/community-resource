import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import VerticalNavigation from "../../Components/VerticalNav.js";


const PatientInfo = () => {
  const { state } = useLocation();
  return (
    <div>
      {Header(state)}
      <div className="d-flex p-3">
        <VerticalNavigation />
      </div>
    </div>
  );
};

export default PatientInfo;
