import React, { useState, useEffect } from "react";
import Patient from "./Patient";
import "@innovaccer/design-system/css";
import styled from "styled-components";
import {
  Placeholder,
  PlaceholderParagraph,
  Button,
} from "@innovaccer/design-system";
import { DataArray, Data, PatientData } from "interfaces";

const LoaderConatiner = styled.div`
  border-bottom: var(--border);
`;
let array: Data[];

const Patients = ({ data }: DataArray) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [Next, setNext] = useState(50);
  const [patients, setPatients]: any = useState([]);

  const loopWithSlice = (
    start: number | undefined,
    end: number | undefined
  ) => {
    const slicedPosts = data.slice(start, end);
    array = [...array, ...slicedPosts];
    setPatients(array);
  };
  console.log(array);

  useEffect(() => {
    array = [];
    loopWithSlice(0, 50);
  }, [data]);

  function showMore() {
    loopWithSlice(Next, Next + 50);
    setNext(Next + 50);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  if (isLoaded === true) {
    return (
      <div>
        {patients.map((patient: PatientData) => {
          return <Patient key={patient.empi} data={patient}></Patient>;
        })}
        {Next + 50 <= data.length ? (
          <div className="bg-light p-5 w-100">
            <Button
              size="regular"
              type="submit"
              onClick={showMore}
              className="ml-auto mr-auto"
            >
              Load More Results
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  } else {
    const n = 15;
    return (
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
    );
  }
};
export default Patients;
