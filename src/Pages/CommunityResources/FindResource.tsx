import React from "react";
import styled from "styled-components";
import { Button } from "@innovaccer/design-system";
import ResourceCards from "./ResourceCards";
import { FindResourceProps } from "interfaces";

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

const FindResource = (params: FindResourceProps) => {
  const input = params.input;
  params.setResource(params.input);
  return (
    <div>
      {input === "" ? (
        <div>
          <Container className="mb-4">
            <Text className="pt-11">Unable to fetch categories</Text>{" "}
            <SubText>Please try after some time</SubText>
          </Container>
          <Button
            appearance="primary"
            size="regular"
            type="submit"
            disabled={true}
          >
            Search
          </Button>
        </div>
      ) : (
        <div>
          {" "}
          <ResourceCards
            setOpen={params.setOpen}
            input={input}
            showList={params.showList}
            setZip={params.setZip}
            setResource={params.setResource}
            setResourceData={params.setResourceData}
            setChildren={params.setChildren}
          />
        </div>
      )}
    </div>
  );
};

export default FindResource;
