import React, { useState } from "react";
import { data } from "Data/CommunityResources/List.json";
import styled from "styled-components";
import { Input, Icon, Dropdown, Caption } from "@innovaccer/design-system";
import ResourceCard from "./ListItem";

const Heading = styled.h2`
  font-weight: var(--font-weight-medium);
  font-size: 22px;
  color: var(--inverse);
`;
const SubHeading = styled.div`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
`;
const InputContainer = styled.div`
  width: 20%;
  margin-left: 10px;
`;
const List = styled.div`
  max-height: 470px;
  overflow: hidden;
  overflow-y: scroll;
`;

const ResourceList = (params) => {
  const goBack = () => {
    params.showList(false);
  };
  const [SearchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-100 p-4 pl-8">
      <div className="d-flex ">
        <Icon size={20} name="arrow_backward" onClick={goBack} />
        <Heading className="ml-6 pt-0 mt-0">Community Resources</Heading>{" "}
      </div>
      <div className="d-flex justify-content-start">
        <InputContainer>
          <Input
            icon="search"
            name="search"
            placeholder="Search by name"
            autoComplete="off"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            icon="place"
            name="input"
            placeholder="Zip Code"
            autoComplete="off"
            value={params.Zip}
          />
        </InputContainer>
        <InputContainer className="mr-4">
          <Dropdown
            className="w-75"
            options={[]}
            placeholder={"Service " + params.ResourceData.label}
          />
        </InputContainer>
      </div>
      <Caption className="m-5">
        {params.ResourceData.label +
          " / " +
          params.ResourceData.children[params.Children].label}
      </Caption>
      <SubHeading className="ml-5">{data.length + " "} RESOURCES</SubHeading>
      <List className="ml-4 mt-6 mr-6">
        {data
          .filter((val) => {
            if (SearchTerm === "") return val;
            else {
              return val.name.toLowerCase().includes(SearchTerm.toLowerCase());
            }
          })
          .map((resource) => {
            return <ResourceCard key={data.id} data={resource} />;
          })}
      </List>
    </div>
  );
};

export default ResourceList;
