import React from 'react';
import { Heading, Input, Button, Icon } from "@innovaccer/design-system";
import Accordion from "../../Components/Accordion";

const Clinical = () => {
    return (
        <div className="w-100 p-4 ml-14">
<div className="d-flex justify-content-between">
  <div className="d-flex pl-8">
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
 <div className=" display-flex pl-8 py-5">
  <Accordion />
  <div className="bg-transparent w-25"></div>
</div> 
</div>
    )
}

export default Clinical
