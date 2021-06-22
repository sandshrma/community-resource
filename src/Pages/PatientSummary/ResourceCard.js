import React, { useState } from "react";
import styled from "styled-components";
import { Button, Sidesheet, ModalDescription,Icon } from "@innovaccer/design-system";
import { MdThumbDown, MdThumbUp } from "react-icons/md";

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

const ResourceCard = ({ data }) => {
  const [Visible, isVisible] = useState("hidden");
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
            <div className="d-flex"> <Icon size={18} appearance='disabled' name='person'/> NA</div>
            <div className="d-flex"> <Icon size={18} appearance='disabled' name='loyalty'/> NA</div>
        </div>
        <div className="d-flex justify-content-between w-50 pt-6">
            <div className="d-flex"> <Icon size={18} appearance='alert' name='place'/> NA</div>
            <div className="d-flex"> <Icon size={18} appearance='warning' name='access_time'/> Closed</div>
            <div className="d-flex"> <Icon size={18} appearance='success' name='phone'/> NA</div>
            <div className="d-flex"> <Icon size={18} appearance='info' name='near_me'/> NA</div>
        </div>
      </Information>
    </Container>
  );
};

export default ResourceCard;
