import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Sidesheet,
  ModalDescription,
  Icon,
} from "@innovaccer/design-system";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { phoneNumber, populationFocus, address } from "helper";

const Container = styled.div`
  text-align: left;
  border-bottom: var(--border);
  background-color: white;
  :hover {
    background-color: var(--secondary-lightest);
  }
`;

const Information = styled.div`
  margin-left: 10px;
`;
const Text = styled.h2`
  font-size: var(--font-size);
`;
const IconStyle = styled.div`
  color: var(--inverse-lighter);
`;

interface Data {
  data: {
    name: string;
    source: string;
    description: string;
    nameDescription: string;
    websiteLinks: string[];
    populationFocus: string[];
    active: boolean;
    upVotes: number;
    downVotes: number;
    resourceType: string;
    facilities: [
      {
        resourceId: string;
        address: string;
        phoneNumbers: [
          {
            value: string;
            type: string;
          }
        ];
        emailIds: string[];
        operationalTimings: [
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          }
        ];
      }
    ];
  };
}

const ResourceCard = ({ data }: Data) => {
  type IsVisible = "hidden" | "visible";
  const [Visible, isVisible] = useState<IsVisible>("hidden");
  function show() {
    isVisible("visible");
  }
  function hide() {
    isVisible("hidden");
  }
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const headerOptions = {
    heading: "Heading",
    subHeading: "Subheading",
  };

  const options = {
    onClose,
    open,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Basic</Button>
      </>
    ),
  };
  const modalDescriptionOptions = {
    title: "Description Title",
    description:
      "Adding a subheading clearly indicates the hierarchy of the information.",
    removePadding: true,
  };

  const modalDescriptionOptionsWithoutTitle = {
    description:
      "Card Sections include supporting text like an article summary or a restaurant description.",
    removePadding: true,
  };
  console.log(data);
  return (
    <Container className="w-100 p-5" onMouseOver={show} onMouseOut={hide}>
      <Information>
        <div className="d-flex justify-content-between">
          <div className="d-flex ">
            <Text className="mr-6 mt-0">{data.name}</Text>
            <IconStyle>
              <MdThumbUp />
              {data.upVotes}{" "}
            </IconStyle>
            <div className="mx-3" />
            <IconStyle>
              <MdThumbDown />
              {data.downVotes}
            </IconStyle>
          </div>
          <div className="d-flex" style={{ visibility: Visible }}>
            <Button
              appearance="basic"
              size="regular"
              className="m-2"
              onClick={() => setOpen(true)}
            >
              View Details
            </Button>
            <Button
              appearance="primary"
              size="regular"
              className="m-2"
              onClick={() => setOpen(true)}
            >
              Refer Resource
            </Button>
            <Sidesheet {...options} dimension="regular">
              <Text>Modal Body</Text>
              <ModalDescription {...modalDescriptionOptions} />
              <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
            </Sidesheet>
          </div>
        </div>
        <div className="d-flex justify-content-between w-50">
          <div className="d-flex">
            <Icon
              size={18}
              appearance="disabled"
              name="person"
              className="mr-4"
            />
            {populationFocus(data.populationFocus)}
          </div>
          <div className="d-flex">
            <Icon
              size={18}
              appearance="disabled"
              name="loyalty"
              className="mr-4"
            />
            NA
          </div>
        </div>
        <div className="d-flex pt-6">
          <div className="d-flex mr-11">
            <Icon size={18} appearance="alert" name="place" className="mr-4" />
            NA
          </div>
          <div className="d-flex mr-11">
            <Icon
              size={18}
              appearance="warning"
              name="access_time"
              className="mr-4"
            />
            Closed
          </div>
          <div className="d-flex mr-12">
            <Icon
              size={18}
              appearance="success"
              name="phone"
              className="mr-4"
            />
            {phoneNumber(data.facilities[0].phoneNumbers, "refer")}
          </div>
          <div className="d-flex mr-12">
            <Icon size={18} appearance="info" name="near_me" className="mr-4" />
            {address(data.facilities[0].address)}
          </div>
        </div>
      </Information>
    </Container>
  );
};

export default ResourceCard;
