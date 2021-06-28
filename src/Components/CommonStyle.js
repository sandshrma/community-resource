import React from "react";
import styled from "styled-components";
import "@innovaccer/design-system/css";
import { reStructure, Time } from "helper";

const LightText = styled.div`
  color: var(--inverse-lighter);
  font-size: var(--font-size);
  margin-left: 5px;
`;
const DarkText = styled.div`
  color: var(--inverse-light);
  font-size: 10.5;
`;
const LightText2 = styled.div`
  color: var(--inverse-light);
  font-size: 13px;
  font-weight: var(--font-weight-medium);
`;
const DarkText2 = styled.div`
  color: var(--inverse);
  font-size: 10.5;
`;
const StyledLi = styled.li`
  float: center;
`;
const Count = styled.div`
  color: var(--inverse);
  background-color: var(--secondary);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
  text-align: center;
  border-radius: 20%/50%;
`;
const DropDownContent = styled.div`
  display: none;
  background-color: white;
  box-shadow: var(--shadow-s);
  z-index: 1;
`;
const DropDownLi = styled(StyledLi)`
  &:hover ${DropDownContent} {
    display: block;
  }
`;
const SubA = styled.a`
  color: black;
  text-decoration: none;
  text-align: left;
`;
const Text = styled.div`
  font-size: 13px;
  font-weight: var(--font-weight-medium);
`;
export const pair = (attribute, value) => {
  return (
    <div className="d-flex">
      <DarkText>{attribute}:</DarkText> <LightText>{value}</LightText>
    </div>
  );
};

export const pair2 = (attribute, value) => {
  return (
    <div className="m-7">
      <LightText2>{attribute}</LightText2>
      <DarkText2>{value}</DarkText2>
    </div>
  );
};
export const light = (age, gender) => {
  return (
    <LightText>
      {age}, {gender}
    </LightText>
  );
};
export const dropdown = (phone) => {
  return phone.length > 1 ? (
    <DropDownLi className="d-inline-block">
      <Count className="ml-4 w-auto h-auto px-4">+{phone.length - 1}</Count>
      <DropDownContent className="position-absolute">
        {phone.map((index) => {
          return (
            <div>
              {index.phone_number.length > 10 ? (
                <SubA className="d-block pt-4 px-6 ">
                  {index.phone_number}{" "}
                </SubA>
              ) : (
                <SubA className="d-block py-3 px-6 ">
                  {reStructure(index.phone_number)}
                </SubA>
              )}
            </div>
          );
        })}
      </DropDownContent>
    </DropDownLi>
  ) : (
    <div />
  );
};

export const Timings = (data) => {
  data = data.data;
  // const today=new Date().getDay();
  if (data.length === 0) return <div>NA</div>;
  return (
    <div>
      {data.map((day) => {
        if (day.status === "CLOSED")
          return (
            <Text className="d-flex">
              {day.day.slice(0, 3).toUpperCase()}
              <div className="ml-6">{day.status}</div>
            </Text>
          );
        else {
          return (
            <Text className="d-flex">
              {day.day.slice(0, 3).toUpperCase()}
              <div className="ml-6">
                {Time(day.opensOn)}-{Time(day.closesOn)}
              </div>
            </Text>
          );
        }
      })}
    </div>
  );
};
