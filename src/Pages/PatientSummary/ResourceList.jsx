import React from "react";
import { data } from "data/CommunityResources/List.json";
import styled from "styled-components";
import {
  Input,
  Icon,
  Dropdown,
  Caption,
  Button,
} from "@innovaccer/design-system";
import ResourceCard from "./ResourceCard";

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

const ResourceList = (params) => {
  return (
    <div className="w-100 p-4 pl-8">
      <div className="d-flex ">
        {/* <Button onClick={params.showList(false)}> */}
        <Icon size={20} name="arrow_backward" />
        {/* </Button> */}
        <Heading className="ml-6 pt-0 mt-0">Community Resources</Heading>{" "}
      </div>
      <div className="d-flex justify-content-start">
        <InputContainer>
          <Input icon="search" name="input" placeholder="Search by name" />
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
            options={[
              { label: "Below 18", value: "below_18" },
              { label: "19 - 35", value: "19-35" },
              { label: "36 - 55", value: "36-55" },
              { label: "56 and above", value: "56_above" },
            ]}
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
      <div className="ml-4 mt-6 mr-8">
        {data.map((resource) => {
          return <ResourceCard key={data.id} data={resource} />;
        })}
      </div>
    </div>
  );
};

export default ResourceList;
