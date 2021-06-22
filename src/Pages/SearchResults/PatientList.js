import React, { useState, useEffect } from "react";
// import { useStateValue } from "../../stateProvider";
// import GetData from "../../data/GetData";
import Patient from "./Patient";
import "@innovaccer/design-system/css";
import styled from "styled-components";
// import SearchBar from "../../components/Search";
import { Placeholder, PlaceholderParagraph } from "@innovaccer/design-system";

// const Body = styled.div`
//   width: 1470px;
// `;

// const Upper = styled.div`
//   height: 100px;
//   background-color: var(--secondary-lightest);
// `;

// const List = styled.div`
//   padding: 15px;
// `;
const LoaderConatiner = styled.div`
  border-bottom: var(--border);
`;

const Patients = ({ data }) => {
  // const [{ term }] = useStateValue();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  if (isLoaded === true) {
    // const data = GetData();
    // const filtered_data = data.data.data.filter((patient_data) => {
    //   //change to data.data in case of api call
    //   const joined = (
    //     patient_data.dob +
    //     " " +
    //     patient_data.empi +
    //     " " +
    //     patient_data.firstName +
    //     " " +
    //     patient_data.middleName +
    //     " " +
    //     patient_data.lastName
    //   ).toLowerCase();
    //   return joined.includes(term.toLowerCase());
    // });
    // console.log(filtered_data.length);

    return (
      // <Body className="d-table">
      //   <Upper className="position-fixed overflow-hidden w-100 pt-4 pl-7 pr-4">
      //     <SearchBar type="Other" />
      //     <h3>Search results for "{term}"</h3>
      //   </Upper>
      //   <List className="mt-11 ml-4">
      <div>
        {data.map((patient) => {
          return <Patient key={patient.empi} data={patient}></Patient>;
        })}
      </div>
      //     <Button
      //         size="large"
      //         type="submit"
      //       >
      //         Load More Results
      //       </Button>
      //   </List>
      // </Body>
    );
  } else {
    const n = 15;
    return (
      // <Body className="d-table">
      //   <Upper className="position-fixed overflow-hidden w-100 pt-4 pl-7 pr-4">
      //     <SearchBar type="Other" />
      //     <PlaceholderParagraph length="small" className="py-6" />
      //   </Upper>
      //   <List className="mt-11 ml-4">
      <div>
        {[...Array(n)].map(() => (
          <LoaderConatiner>
            <Placeholder withImage={false} className="p-6 bg-light w-100">
              <PlaceholderParagraph length="small" />
              <PlaceholderParagraph />
            </Placeholder>
          </LoaderConatiner>
        ))}
      </div>
      //   </List>
      // </Body>
    );
  }
};
export default Patients;

/*<Icon size={50} name='block' appearance="alert"/> */
