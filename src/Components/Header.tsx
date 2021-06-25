import styled from "styled-components";
import { Icon } from "@innovaccer/design-system";
import logo from "../assets/avatar.svg";
import { pair2 as pair } from "./CommonStyle";
import { Payer, reStructure, phoneNumber, date } from "../helper";

const Wrapper = styled.div`
  justify-content: start;
  top: 46px;
  border-bottom: 1.5px solid rgb(134, 134, 134, 0.2);
  height: 60px;
`;
const NameText = styled.div`
  font-size: var(--font-size);
  font-weight: var(--font-weight-medium);
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: var(--font-weight-bold);
`;
interface Number{
  
    phone_number: string;
    preferred: boolean;
    sanitized: string;

}

interface Data{
  data:{
    duplicates: string[];
    payers: {
      total: number;
    current: {
        count: number;
        data: [
            {
                payer_id: number;
                payer_name: string;
                plan_id: string;
                plan_name: string;
                patient_plan_id: string;
                date_of_attribution: string;
                subscriber_responsibity_seq_code: string;
                subscriber_first_name: string;
                subscriber_middle_name: string;
                subscriber_last_name: string;
                patient_subscriber_relationship_name: string;
                patient_subscriber_id: string;
                attribution_start_date: string;
                attribution_end_date: string;
            }
        ]
    },
}

    firstName: string;
    middleName: string;
    lastName: string;
    is_deceased: boolean;
    empi: string;
    member_id: string[]
    gender: string;
    age: string;
    dob: string;

    primary_care_provider: {
      region_name: string;
      date_of_attribution: string;
      plan_id:string;
      region_id: string;
      provider_name: string;
      plan_name: string;
      organization_name:string;
      facility_name: string;
      payer_name: string;
    },
    is_disabled: boolean;
    should_breakglass:boolean;
    doNotContact: boolean;
    has_legal_hold: boolean;
    phone_number: Number[];
}}

const Header = ({data}:Data) => {
 console.log(data);

  return (
    <Wrapper className="position-static d-flex w-100 align-items-center bg-light">
      <Icon size={10} className="m-4 ml-6">
        <img src={logo} alt="avatar" />
      </Icon>
      <NameText className="m-4">
        <Name>
          {data.lastName}, {data.firstName} {data.middleName}
        </Name>
        <div>
          {date(data.dob)} ({data.age.slice(0, 1) + data.age.slice(2, 3)}),{" "}
          {data.gender}
        </div>
      </NameText>
      {pair("EMPI", data.empi)}
      {pair("RISK", "-")}
      {pair("SVI", "-")}
      {pair("Programs", "-")}
      {pair("Payer", Payer(data.payers, "other"))}
      {pair("PCP", data.primary_care_provider.provider_name)}
      {pair("Phone", reStructure(phoneNumber(data.phone_number, "other")))}
      {pair("Value Partner", data.primary_care_provider.organization_name)}
    </Wrapper>
  );
};
export default Header;
