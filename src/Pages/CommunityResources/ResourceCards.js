import React, { useState } from "react";
import dataInternal from "Data/CommunityResources/Internal.json";
import dataPartner from "Data/CommunityResources/Partner-resources.json";
import dataAuntBertha from "Data/CommunityResources/AuntBertha.json";
import { Radio, Button } from "@innovaccer/design-system";
import styled from "styled-components";
import Icon from "Components/ResourceIcons";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 140px 140px 140px 140px 140px;
  grid-gap: 20px 10px;
`;
const Card1 = styled.div`
  border: 0.5px solid #e5e5e5;
  border-radius: 10px;
  width: 130px;
  height: 100px;
  :hover {
    background-color: var(--secondary-light);
  }
`;

const ResourceCards = (params) => {
  const [ShowChildren, setShowChildren] = useState(true);
  const [Index, setIndex] = useState(-1);
  const [Disabled, setDisabled] = useState(true);
  const resource = params.resource;
  const show = () => {
    setShowChildren(!ShowChildren);
  };
  var data;
  if (resource === "Internal Resource") {
    data = dataInternal;
  } else if (resource === "Partner Resource") {
    data = dataPartner;
  } else {
    data = dataAuntBertha;
  }
  return (
    <div className="mb-4">
      <Grid>
        {resource === "Partner Resource" ? (
          data.nodes.map((resource_type, index) => {
            return (
              <Card1
                shadow="none"
                className="p-3"
                style={{
                  color: Index === index ? "#0070DD" : "",
                }}
                onClick={() => {
                  setIndex(index);
                  setDisabled(false);
                  params.setResourceData(resource_type);
                  params.setChildren(-1);
                }}
              >
                <div className="align-middle pl-8 pt-6">
                  <div className="pl-6">
                    <Icon type={resource_type.label} />
                  </div>
                  <div>
                    {resource_type.label} ({resource_type.count})
                  </div>
                </div>
              </Card1>
            );
          })
        ) : ShowChildren ? (
          data.nodes.map((resource_type, index) => {
            return (
              <Card1
                shadow="none"
                className="p-3"
                onClick={() => {
                  setIndex(index);
                  setDisabled(true);
                  show();
                  params.setResourceData(resource_type);
                }}
              >
                <div className="align-middle pl-8 pt-6">
                  <div className="pl-6">
                    <Icon type={resource_type.label} />
                  </div>
                  <div>
                    {resource_type.label} ({resource_type.count})
                  </div>
                </div>
              </Card1>
            );
          })
        ) : (
          <div>
            <Button
              onClick={() => {
                show();
                setDisabled(true);
              }}
            >
              {"<"}
            </Button>
            {data.nodes[Index].children.map((resource_type, index) => {
              return (
                <div
                  className="ml-9 d-flex p-3"
                  style={{ width: "300px", fontWeight: "700" }}
                >
                  <Radio
                    label={resource_type.label}
                    name="subresources"
                    value="children"
                    onChange={() => {
                      setDisabled(false);
                      params.setChildren(index);
                    }}
                  />
                  ({resource_type.count})
                </div>
              );
            })}
          </div>
        )}
      </Grid>
      <br />

      <Button
        appearance="primary"
        size="regular"
        type="submit"
        disabled={Disabled}
        onClick={() => {
          params.setOpen(false);
          params.showList(true);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default ResourceCards;
