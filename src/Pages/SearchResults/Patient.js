import styled from "styled-components";
import "@innovaccer/design-system/css";
import { Link } from "react-router-dom";
import {
  fullName,
  Payer,
  phoneNumber,
  reStructure,
  light,
  pair,
  dropdown,
} from "../../helper";

const Container = styled.div`
  text-align: left;
  border-bottom: var(--border);
`;
const Information = styled.div`
  margin-left: 10px;
`;
const Name = styled.div`
  color: var(--primary);
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: var(--primary-darker);
  }
`;
const Empi = styled.div`
  color: var(--inverse);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  background-color: var(--secondary-light);
  border-radius: 3px;
`;
const Layer = styled.div`
  display: flex;
`;
const LegalHold = styled.div`
  background-color: var(--accent2-lightest);
  color: var(--accent2-darker);
  border-radius: 7%;
  font-weight: var(--font-weight-bold);
`;
const Deceased = styled.div`
  background-color: var(--alert-lightest);
  color: var(--alert-dark);
  border-radius: 7%;
  font-weight: var(--font-weight-bold);
`;
const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: var(--inverse-lighter);
  border-radius: 50%;
  display: inline-block;
  align-items: center;
  margin: 4px;
  margin-top: 7px;
`;

const Patient = ({data}) => {
  const fullname = fullName(data.firstName, data.middleName, data.lastName);
  const payer = Payer(data.payers);
  const phone_number = reStructure(phoneNumber(data.phone_number));

  return (
    <Container className="w-100 bg-light p-5">
      <Information>
        <Layer className="my-3">
          {" "}
          <Link
            to={{ pathname: "/summary", state:{data} }}
            style={{ textDecoration: "none" }}
          >
            <Name>{fullname}</Name>
          </Link>
           {light(data.age, data.gender)} <Empi className=" ml-4 pl-3 pr-3">{data.empi}</Empi>{" "} 
        </Layer>
        <Layer>
          {pair("DOB", data.dob)} <Dot />{" "}
          {pair(data.attribution[0].display_name, data.attribution[0].value)} <Dot />
          {pair(data.attribution[1].display_name, data.attribution[1].value)}
          <Dot /> {pair("Payer", payer)} <Dot />
          {pair("Ph", phone_number)}
          {dropdown(data.phone_number)}
        </Layer>
        <Layer>
          {data.is_deceased ? <Deceased className="p-3 mr-4 mt-4">DECEASED</Deceased> : <div/>}
          {data.has_legal_hold ? <LegalHold className="p-3 mt-4">LEGAL HOLD</LegalHold> : <div />}
        </Layer> 
      </Information>
    </Container>
  );
};

export default Patient;
