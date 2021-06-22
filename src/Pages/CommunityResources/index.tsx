import React , {useState} from "react";
import styled from "styled-components";
import { Input, Icon, Radio} from "@innovaccer/design-system";
import logo from "../../assets/aunt_bertha.png";
import FindResource from "./FindResource";

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
  const [inputValue, setInput] = useState("");
  console.log(inputValue);

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
        <>
          <Radio
            label="Partner resource"
            name="resources"
            value="Partner Resource"
            onChange={(e) => setInput(e.target.value)}
            className="pr-2"
          />
          <Icon
            appearance="subtle"
            name="info"
            size={16}
            className=" pr-8 pt-3"
          />
        </>
        <Radio
          label="Interal resource"
          name="resources"
          value="Internal Resource"
          onChange={(e) => setInput(e.target.value)}
          className=" pr-8"
        />
        <div className="d-flex">
          <Radio name="resources" value="Aunt Bertha" onChange={(e) => setInput(e.target.value)}/>

          <img src={logo} alt="Aunt Bertha" height="15" className="p-2 pl-4" />
        </div>
      </div>
      <h3>Select Service</h3>
     { FindResource(inputValue) }

    </Container>
  );
};

export default CommunityResources;
