import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon,Heading} from '@innovaccer/design-system';
import "@innovaccer/design-system/css";

const AccordianSection=styled.div`
background-color:white;
color:black;
box-shadow: var(--shadow-s);

`;

const DropDownContent=styled.div`
border-top:1.5px solid rgb(134, 134, 134, 0.2);
border-bottom-left-radius:100%;
border-bottom-right-radius:100%;
`;

const Accordion = () => {
  const [state,setState]=useState(true);

  const toggle=()=>
  {
    setState(!state);
  }
  console.log(state);
  return (
    <AccordianSection className="mt-4 flex-fill">
    <div className="d-flex justify-content-between" >
      <div className="d-flex p-5"><Icon size={20} name="assignment_ind" className="p-3"/><Heading >Clinical Data</Heading></div>
      
      {state?<Icon size={20} name="keyboard_arrow_up" onClick={toggle} className="p-5"/>:<Icon size={20} name="keyboard_arrow_down" onClick={toggle} className="p-5"/>}
    </div>
    {
      state? <DropDownContent className="p-5  h-25"> dropdown content </DropDownContent> : <div className="bg-inverse"/>
    }
    </AccordianSection>
  )
}

export default Accordion
