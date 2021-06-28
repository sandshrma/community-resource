import React from "react";
import { useStateValue } from "stateProvider";
import GetData from "Data/GetData";
import "@innovaccer/design-system/css";
import styled from "styled-components";
import PatientList from "./PatientList";
import SearchBar from "Components/Search";
import empty from "assets/empty.png";
import { Button } from "@innovaccer/design-system";

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
const NotFound = styled.div`
  text-align: center;
`;
const TextContainer = styled.h2`
  text-align: center;
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-normal);
  color: var(--inverse);
`;
const SubText = styled.div`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight);
  color: var(--inverse-light);
  width: 40%;
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
      {filtered_data.length > 0 ? (
        <List className="mt-11 ml-4">
          <PatientList data={filtered_data} />
        </List>
      ) : (
        <NotFound className=" mt-14">
          <img src={empty} alt="not found" height={100} width={300} />
          <TextContainer>We didn't find a Match</TextContainer>
          <SubText className="d-block ml-auto mr-auto">
            Try using a different keyword, or advanced search for a more
            specific result or else feel free to create a new patient.
          </SubText>
          <Button icon="person_add" className="ml-auto mr-auto mt-6">
            Create Patient
          </Button>
        </NotFound>
      )}
    </Body>
  );
};

export default SearchResults;
