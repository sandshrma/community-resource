import React from "react";
import { useStateValue } from "stateProvider";
import GetData from "Data/GetData";
import "@innovaccer/design-system/css";
import styled from "styled-components";
import PatientList from "./PatientList";
import SearchBar from "Components/Search";

const Body = styled.div`
  width: 1470px;
`;
const Upper = styled.div`
  height: 100px;
  background-color: var(--secondary-lightest);
`;
const List = styled.div`
  padding: 15px;
`;

const SearchResults = () => {
  const [{ term }] = useStateValue();
  const data = GetData();

  let filtered_data = data.data.data.filter((patient_data) => {
    const joined = (
      patient_data.dob +
      " " +
      patient_data.empi +
      " " +
      patient_data.firstName +
      " " +
      patient_data.middleName +
      " " +
      patient_data.lastName
    ).toLowerCase();
    return joined.includes(term.toLowerCase());
  });
  return (
    <Body className="d-table">
      <Upper className="position-fixed overflow-hidden w-100 pt-4 pl-7 pr-4">
        <SearchBar type="Other" />
        <h3>Search results for "{term}"</h3>
      </Upper>
      <List className="mt-11 ml-4">
        <PatientList data={filtered_data} />
      </List>
    </Body>
  );
};

export default SearchResults;
