import React, { useState } from "react";
import { useStateValue } from "../../stateProvider";
import GetData from "../../Data/GetData";
import Patient from "./Patient.js";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../../Reducer";
import { Input, Button } from "@innovaccer/design-system";
import "@innovaccer/design-system/css";
import styled from "styled-components";

const Body = styled.div`
  width: 1470px;
`;

const Upper = styled.div`
  height: 100px;
  background-color: var(--secondary-lightest);
`;

const Container = styled.div`
  margin-top: 15px;
`;

const List = styled.div`
  padding: 15px;
`;

const InputWrapper = styled.div`
  width: 360px;
  margin-right: 10px;
`;

const MarginV = styled.div`
  height: 100px;
  position: sticky;
`;

const Patients = () => {
  const history = useHistory();
  const [inputValue, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: inputValue,
    });
    history.push(`/search`);
  };

  const [{ term }, dispatch] = useStateValue();
  const data = GetData();
   const filtered_data = data.data.data.filter((patient_data) => {              //change to data.data in case of api call
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
    <Body>
      <Upper className="position-fixed overflow-hidden w-100 pt-4 pl-4 pr-4">
        <Container className=".m-14 d-flex">
          <InputWrapper>
            <Input
              icon="search"
              name="input"
              placeholder="Search by Patients's Name, EMPI or DOB"
              size="regular"
              className="bg-light"
              value={inputValue}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </InputWrapper>
          <Button
            appearance="primary"
            size="regular"
            type="submit"
            onClick={search}
            className="mr-4"
          >
            Search Patient
          </Button>

          <Button appearance="basic" size="regular" icon="keyboard_arrow_down">
            Advanced Search
          </Button>
        </Container>
        <h3>Search results for "{term}"</h3>
      </Upper>
      <MarginV />

      <List>
        {filtered_data.map((patient) => {
          return (
            <Patient
              key={patient.empi}
              data={patient}
            ></Patient>
          );
        })}
      </List>
    </Body>
  );
};
export default Patients;


/*<Icon size={50} name='block' appearance="alert"/> */