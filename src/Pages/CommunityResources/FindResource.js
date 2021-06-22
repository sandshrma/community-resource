import React from "react";
import styled from "styled-components";
import { Button} from "@innovaccer/design-system";
import ResourceCards from "./ResourceCards";

const Container = styled.div`
  border: 0.5px solid var(--secondary-dark);
  border-radius: 3px;
  width: 700px;
  min-height: 250px;
  text-align: center;
`;
const Text = styled.div`
  font-size: var(--font-size-l);
`;
const SubText = styled.div`
  font-size: var(--font-size);
  color: var(--inverse-lighter);
`;

const FindResource = (input) => {
  return (
    <div>
        
        {input === "" ? (
          <Container className="mb-4">
            <Text className="pt-11">Unable to fetch categories</Text>{" "}
            <SubText>Please try after some time</SubText>
            </Container> 
        ) : (
         <div> {ResourceCards(input)}</div>
        )}
    
       
      <Button appearance="primary" size="regular" type="submit">
        Search
      </Button>
    </div>
  );
};

export default FindResource;

//zip:12345;
