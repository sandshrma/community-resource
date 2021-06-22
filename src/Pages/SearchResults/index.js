import React, { useState, useEffect } from "react";
import { useStateValue } from "../../stateProvider";
import GetData from "../../data/GetData";
import "@innovaccer/design-system/css";
import styled from "styled-components";
import PatientList from "./PatientList";
import SearchBar from "../../components/Search";
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
let array = [];
const SearchResults = () => {
  const [{ term }] = useStateValue();
  const data = GetData();

  const filtered_data = data.data.data.filter((patient_data) => {
    //change to data.data in case of api call
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
  const [ToShow, setToShow] = useState([]);
  const [Next, setNext] = useState(50);

  const loopWithSlice = (start, end) => {
    const slicedPosts = filtered_data.slice(start, end);
    array = [...array, ...slicedPosts];
    setToShow(array);
  };
  console.log(array);

  useEffect(() => {
    loopWithSlice(0, 50);
  }, []);

  function showMore() {
    loopWithSlice(Next, Next + 50);
    setNext(Next + 50);
  }
  return (
    <Body className="d-table">
      <Upper className="position-fixed overflow-hidden w-100 pt-4 pl-7 pr-4">
        <SearchBar type="Other" />
        <h3>Search results for "{term}"</h3>
      </Upper>
      <List className="mt-11 ml-4">
        <PatientList data={ToShow} />
        <div className="bg-light p-5 w-100">
          <Button
            size="medium"
            type="submit"
            onClick={showMore}
            className="ml-auto mr-auto"
          >
            Load More Results
          </Button>
        </div>
      </List>
    </Body>
  );
};

export default SearchResults;
