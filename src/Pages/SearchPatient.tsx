import React from "react";
import "@innovaccer/design-system/css";
import styled from "styled-components";
import SearchBar from "../components/Search";
import logo from "../assets/search_home.png";

const ImageContainer = styled.img`
  height: 75px;
  width: 60px;
`;

const TextContainer = styled.h2`
  text-align: center;
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-normal);
  color: var(--inverse);
`;

const TextContainer2 = styled.div`
  text-align: center;
  font-size: var(--font-size-m);
  font-weight: 350;
  color: var(--inverse-light);
  width: 350px;
  margin-top: -5px;
`;

const Search = () => {
  return (
    <div>
      <SearchBar type="Home" />
      <ImageContainer src={logo} className="d-block ml-auto mr-auto mt-7" />
      <TextContainer>Looking for patients?</TextContainer>
      <TextContainer2 className="d-block ml-auto mr-auto ">
        Enter patient details or make use of advanced search for a more specific
        search
      </TextContainer2>
    </div>
  );
};

export default Search;
