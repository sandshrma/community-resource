import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Heading,
  Button,
  Caption,
  Icon,
  Label,
  Checkbox,
  DatePicker,
  Radio,
  Text,
} from "@innovaccer/design-system";
import { phoneNumber, address } from "helper";
import { Timings } from "Components/CommonStyle";

const Header = styled.div`
  border-bottom: 1px solid var(--secondary-lighter);
`;
const CommentBox = styled.textarea`
  border: 1px solid var(--secondary);
  border-radius: 5px;
  :hover {
    border: 1px solid var(--primary);
  }
  :focus {
    outline: none;
  }
`;
const Body = styled.div`
  max-height: 640px;
  overflow: hidden;
  overflow-y: scroll;
`;

const ModalContent = (data) => {
  const date = new Date();
  const { state } = useLocation();
  const [disabled, isDisabled] = useState(true);
  return (
    <div>
      <Header className="position-sticky">
        <div className="d-flex justify-content-between w-100">
          <Heading size="m">Refer Resource to {state.data.firstName}</Heading>
          <Button appearance="success" size="regular" disabled={disabled}>
            Send Referral
          </Button>
        </div>
        <Caption className="pb-6">{data.data.name}</Caption>
      </Header>
      <Body>
        <div>
          <h5>PLEASE FILL REFERRAL DETAILS</h5>
          <div className="my-4">
            <Label required={true}>Select Social need</Label>
            <Checkbox
              label={data.data.categories[0].label}
              defaultChecked={true}
              className="mt-4"
            />
          </div>
          <div className="my-7">
            <Label>Proposed Appointment Date</Label>
            <div className="w-25 mt-4">
              <DatePicker
                disabledAfter={1831919400000}
                disabledBefore={date}
                withInput={true}
              />
            </div>
          </div>
          <div className="my-7">
            <div className="d-flex">
              <Label required="true">Pateint Contact Details</Label>
              <Caption className="ml-6">atleast one is required</Caption>
            </div>
            <div className="mt-6">
              <div className="d-flex my-2">
                <Icon size={15} name="phone" className="mr-4 p-2" />
                <Text>Phone Number</Text>
              </div>
              <div className="d-flex justify-content-between w-75 mt-4 ml-7">
                {phoneNumber(data.data.facilities[0].phoneNumbers, "refer")}
                <Icon size={15} name="edit" />
              </div>
            </div>
            <div className="mt-6">
              <div className="d-flex my-2">
                <Icon size={15} name="email" className="mr-4 p-2" />
                <Text>Email</Text>
              </div>
              <div className=" d-flex justify-content-between w-75 mt-4 ml-7">
                {data.data.facilities[0].emailIds.length === 0
                  ? "NA"
                  : data.data.facilities[0].emailIds[0]}
                <Icon size={15} name="edit" />
              </div>
            </div>
          </div>
          <div className="my-7">
            <Label required="true">Preferred mode of contact</Label>
            <div className="d-flex my-4">
              <Radio
                label="Phone"
                name="contact"
                value="Phone"
                //onChange={(e) => setInput(e.target.value)}
                className=" pr-8"
              />
              <Radio
                label="Email"
                name="contact"
                value="Email"
                //onChange={(e) => setInput(e.target.value)}
                className=" pr-8"
              />
              <Radio
                label="Text"
                name="contact"
                value="Text"
                //onChange={(e) => setInput(e.target.value)}
                className=" pr-8"
              />
              <Radio
                label="No Contact"
                name="contact"
                value="No Contact"
                //onChange={(e) => setInput(e.target.value)}
                className=" pr-8"
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Label>Comments</Label>
            </div>
            <CommentBox
              rows="4"
              cols="50"
              placeholder="Enter your Comments Here"
            />
          </div>
        </div>
        <hr
          style={{
            height: "0.5px",
            borderWidth: "0",
            backgroundColor: "var(--secondary)",
          }}
        />
        <div className="d-flex justify-content-between">
          <div>
            <h4>1 Nearest Location to 12345</h4>
            <div className="mb-4">
              <Icon
                size={15}
                appearance="info"
                name="near_me"
                className="mr-4"
              />
              {address(data.data.facilities[0].address)}
            </div>
            <div className="mb-4">
              <Icon
                size={15}
                appearance="success"
                name="phone"
                className="mr-4"
              />
              {phoneNumber(data.data.facilities[0].phoneNumbers, "refer")}
            </div>
            <div className="mb-4">
              <Icon
                size={15}
                appearance="destructive"
                name="email"
                className="mr-4"
              />
              NA
            </div>
          </div>
          <div className="d-flex p-9">
            <Icon
              size={15}
              name="access_time"
              appearance="warning"
              className="mr-4"
            />
            <Timings data={data.data.facilities[0].operationalTimings} />
          </div>
        </div>
      </Body>
    </div>
  );
};

export default ModalContent;
