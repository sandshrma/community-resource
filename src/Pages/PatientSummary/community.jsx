import React from "react";
import styled from "styled-components";
import { Button, Icon } from "@innovaccer/design-system";
import Modal from "react-modal";
import "@innovaccer/design-system/css";
import image from "../../assets/community.png";
import CommunityResources from "../CommunityResources";

const Heading = styled.h2`
  font-weight: var(--font-weight);
  color: var(--inverse);
`;
const Image = styled.img`
  width: 35%;
  padding-top: 10%;
`;
const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
};

const Community = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-100 p-8" style={{ textAlign: "center" }}>
      <Heading> Community Resources</Heading>
      <p>
        Community Resources are assets in a community that help meet <br />
        certain needs for those around them. These assets can be people, <br />
        places or structures, and community services.
      </p>
      <Button
        appearance="primary"
        className="ml-auto mr-auto"
        onClick={() => setOpen(true)}
      >
        Refer Resource
      </Button>
      <Image src={image} alt="community"></Image>
      <Modal isOpen={open} style={customStyles}>
        <div className="d-flex justify-content-between">
          <div></div>{" "}
          <Icon size={20} name="close" onClick={() => setOpen(false)}></Icon>
        </div>
        <CommunityResources />
      </Modal>
    </div>
  );
};

export default Community;
