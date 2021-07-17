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
import BookRide from "Components/BookRide";

const Header = styled.div`
  border-bottom: var(--border);
`;
const CommentBox = styled.textarea`
  border: var(--border);
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
const InfoSection = styled.div`
  border-bottom: var(--border);
`;
let array = ["Phone", "Email", "Text", "No Contact"];

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
        <InfoSection>
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
              {array.map((contactmode) => {
                return (
                  <Radio
                    label={contactmode}
                    name="contact"
                    value={contactmode}
                    onChange={(e) => isDisabled(false)}
                    className="pr-8"
                  />
                );
              })}
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-4">
              <Label>Comments</Label>
            </div>
            <CommentBox
              rows="4"
              cols="50"
              placeholder="Enter your Comments Here"
            />
          </div>
        </InfoSection>
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
            <BookRide
              pickup={12345}
              drop={address(data.data.facilities[0].address)}
            />
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
