import React, { useState } from "react";
import "@innovaccer/design-system/css";
import { Input, Button } from "@innovaccer/design-system";
import styled from "styled-components";
import "react-dropdown/style.css";
import { useStateValue } from "stateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "Reducer";

const Container = styled.div`
  margin-top: 4.5%;
  margin-left: 28%;
`;
const InputWrapper = styled.div`
  width: 500px;
  margin-right: 10px;
`;
const InputWrapper2 = styled.div`
  width: 360px;
  margin-right: 10px;
`;
const Margin = styled.div`
  width: 15px;
`;
type Pagetype = {
  type: string;
};

const SearchBar = ({ type }: Pagetype) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [inputValue, setInput] = useState("");

  const search = (e: any) => {
    if (inputValue !== "") {
      e.preventDefault();
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: inputValue,
      });

      history.push(`/search`);
    }
  };

  return (
    <div>
      {type === "Home" ? (
        <div>
          <Container className="d-flex">
            <InputWrapper>
              <Input
                icon="search"
                name="input"
                placeholder="Search by Patients's Name, EMPI or DOB"
                size="large"
                className="bg-light"
                value={inputValue}
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
              />
            </InputWrapper>
            <Button
              appearance="primary"
              size="large"
              type="button"
              onClick={search}
            >
              Search Patient
            </Button>
            <Margin />
          </Container>
          <div className="d-flex mt-4 ml-14 pl-13 mb-6">
            <Button
              appearance="basic"
              size="regular"
              icon="keyboard_arrow_down"
            >
              Advanced Search
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-6 d-flex">
            <InputWrapper2>
              <Input
                icon="search"
                name="input"
                placeholder="Search by Patients's Name, EMPI or DOB"
                size="regular"
                className="bg-light"
                value={inputValue}
                autoComplete="off"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </InputWrapper2>
            <Button
              appearance="primary"
              size="regular"
              type="submit"
              onClick={search}
              className="mr-4"
            >
              Search Patient
            </Button>
            <Button
              appearance="basic"
              size="regular"
              icon="keyboard_arrow_down"
            >
              Advanced Search
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
