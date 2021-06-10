import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon} from '@innovaccer/design-system';
import "@innovaccer/design-system/css";

const AccordianSection=styled.div`
background-color:white;
height:45%;
color:black;
box-shadow: var(--shadow-s);
`;
const DropDown=styled.div`
border-top:1.5px solid rgb(134, 134, 134, 0.2);
border-bottom-left-radius:100%;
border-bottom-right-radius:100%;
margin-left:500px;
`;

const Accordion = () => {
  const [state,setState]=useState(true);

  const toggle=()=>
  {
    setState(!state);
  }
  console.log(state);
  return (
    <AccordianSection>
    <div className="d-flex justify-content-between m-6 ml-14" >
      Heading
      {state?<Icon name="keyboard_arrow_up" onClick={toggle}/>:<Icon name="keyboard_arrow_down" onClick={toggle}/>}
    </div>
    {
      state? <DropDown>dropdown content </DropDown> : <div/>
    }
    </AccordianSection>
  )
}

export default Accordion
