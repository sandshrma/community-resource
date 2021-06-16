import React from "react";
import styled from "styled-components";
import { Input, Icon, Radio } from "@innovaccer/design-system";
import logo from '../../assets/aunt_bertha.png';

const Container = styled.div`
  text-align: left;
  width: 550px;
  margin-left: auto;
  margin-right: auto;
`;
const Heading = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight);
`;
const Subheading = styled.div`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight);
  color: var(--inverse-lighter);
`;
const InputWrapper = styled.div`
  width: 60px;
`;

const CommunityResources = () => {
  return (
    <Container>
      <Heading className="pt-8 pb-8">Search Community Resources</Heading>
      <Subheading>
        Search on the basis of social needs such as Food, Housing, Education,
        <br /> Health needs and more.
      </Subheading>
      <br />
      <div className="d-flex">
        <h3>Searching near</h3>
        <Icon appearance="subtle" name="info" size={18} className="pt-6 pl-4" />
      </div>
      <InputWrapper>
        <Input icon="place" name="input" placeholder="Zip Code" />
      </InputWrapper>
      <br />
      <h3>Select Source</h3>
      <div className="d-flex">
        <div className="d-flex">
          <Radio
            label="Partner resource"
            name="partner"
            onChange={function (_) {}}
            value="Partner Resource"
            className="pr-2"
          />
          <Icon
            appearance="subtle"
            name="info"
            size={16}
            className=" pr-8 pt-3"
          />
        </div>
        <Radio
          label="Interal resource"
          name="internal"
          onChange={function (_) {}}
          value="Internal Resource"
          className=" pr-8"
        />
        <div className="d-flex">
          <Radio
            name="aunt_bertha"
            onChange={function (_) {}}
            value="Aunt Bertha"
          />
          
              <img src={logo} alt= "Aunt Bertha" height="15" className="p-2 pl-4"/>
        
        </div>
      </div>
    </Container>
  );
};

export default CommunityResources;
