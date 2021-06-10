import React, { useState } from "react";
import "@innovaccer/design-system/css";
import { Input, Button } from "@innovaccer/design-system";
import styled from "styled-components";
//import { Advanced } from '../Layout/Advanced-search';
//import Dropdown from 'react-dropdown';
import "react-dropdown/style.css";
import { useStateValue } from "../stateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../Reducer";
import logo from "../assets/search_home.png";

const Container = styled.div`
  margin-top: 4.5%;
  margin-left: 28%;
  display: flex;
`;

const InputWrapper = styled.div`
  width: 500px;
  margin-right: 10px;
`;

const Container2 = styled.div`
  margin-top: 10px;
  margin-left: 28%;
  margin-bottom: 10px;
  display: flex;
`;

const ImageContainer = styled.img`
  height: 75px;
  width: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

const TextContainer = styled.h2`
  text-align: center;
  font: Nunito Sans;
  font-family: Nunito Sans;
  font-size: 20px;
  font-weight: 400;
  color: #2f2f2f;
`;

const TextContainer2 = styled.div`
  text-align: center;
  font: Nunito Sans;
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 350;
  color: #595959;
  width: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5px;
`;

const Margin = styled.div`
  width: 15px;
`;

const Search = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [inputValue, setInput] = useState("");

  const search = (e: any) => {
    e.preventDefault();
    console.log(inputValue);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: inputValue,
    });

    history.push(`/search`);
  };

  return (
    <div>
      <Container>
        <InputWrapper>
          <Input
            icon="search"
            name="input"
            placeholder="Search by Patients's Name, EMPI or DOB"
            size="large"
            className="bg-light"
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputWrapper>
        <Button
          appearance="primary"
          size="large"
          type="submit"
          onClick={search}
        >
          Search Patient
        </Button>
        <Margin />
      </Container>
      <Container2>
        <Button appearance="basic" size="regular" icon="keyboard_arrow_down">
          Advanced Search
        </Button>
      </Container2>
      <ImageContainer src={logo} />
      <TextContainer>Looking for patients?</TextContainer>
      <TextContainer2>
        Enter patient details or make use of advanced search for a more specific
        search
      </TextContainer2>
    </div>
  );
};

export default Search;
