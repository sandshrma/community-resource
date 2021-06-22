import React from "react";
import styled from "styled-components";
import { Icon } from "@innovaccer/design-system";
import { Link } from "react-router-dom";

const NavigationWrapper = styled.nav`
  top: 0;
  height: 45px;
  align-self: center;
  border-bottom: 1.5px solid rgb(134, 134, 134, 0.2);
`;
const Align = styled.div`
  display: flex;
  justify-content: left;
`;
const NavElement = styled.text`
  color: var(--inverse-lighter);
  display: flex;
  font-weight: var(--font-weight-normal);
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: var(--primary);
  }
`;
const Navigation = () => {
  return (
    <NavigationWrapper className="position-sticky d-flex w-100 justify-content-between bg-light ">
      <Align>
        <NavElement>
          <Icon size={50}>
            <img
              height="20"
              src="https://s3.us-east-2.amazonaws.com/applayer-resources/pd@_qa/images/default_brand_icon.png"
              alt="logo"
              width="20"
            />
          </Icon>
        </NavElement>
        <NavElement>Data</NavElement>
        <NavElement>DAP</NavElement>
        <Link to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
          <NavElement>Patients</NavElement>
        </Link>
        <NavElement>Analytics</NavElement>
        <NavElement>Care Management</NavElement>
        <NavElement>Outreach</NavElement>
        <NavElement>Studio</NavElement>
        <NavElement>User Admin</NavElement>
        <NavElement>Settings</NavElement>
        <NavElement>More</NavElement>
      </Align>
      <Align>
        <NavElement>Help</NavElement>
        <NavElement>Username</NavElement>
      </Align>
    </NavigationWrapper>
  );
};
export default Navigation;
