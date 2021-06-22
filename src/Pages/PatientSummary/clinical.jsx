import React from "react";
import { Heading, Input, Button, Icon } from "@innovaccer/design-system";
import Accordion from "../../components/Accordion";

const Clinical = () => {
  return (
    <div className="w-100 p-4 pl-8">
      <div className="w-100 d-flex justify-content-between">
        <div className="d-flex ">
          <Heading className="pr-4">Summary</Heading>{" "}
          <Input
            icon="search"
            name="input"
            placeholder="Search"
            className="bg-secondary-lighter"
          />
        </div>
        <div className="d-flex justify-content-evenly ">
          <Button className="mr-4">Export PDF</Button>{" "}
          <Button className="mr-4" disabled>
            Download CCDA
          </Button>
          <Button className="mr-4">
            <Icon size={18} name="print" className="mr-1" />
            Print Pre-visit Summary
          </Button>
          <Button disabled>
            <Icon size={20} name="list" />
          </Button>
        </div>
      </div>
      <div className="w-100 d-flex py-5 justify-content-between ">
        <Accordion />
        <div className=" m-6" style={{ width: "15%" }}>
          {" "}
          Side Panel{" "}
        </div>
      </div>
    </div>
  );
};

export default Clinical;
