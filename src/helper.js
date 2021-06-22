import styled from 'styled-components';
import "@innovaccer/design-system/css";

const LightText = styled.div`
  color: var(--inverse-lighter);
  font-size:var(--font-size);
  margin-left: 5px;
`;
const DarkText = styled.div`
  color: var(--inverse-light);
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
  /* padding: 12px 16px; */
  text-decoration: none;
  text-align: left;
`;

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

export const fullName=(firstName,middleName,lastName)=>{
    var fullName = "";
  if (lastName !== "") fullName += capitalize(lastName);
  if (firstName !== "") fullName += ", " + capitalize(firstName);
  if (middleName !== "") fullName += " " + capitalize(middleName);
return fullName;
}

export const Payer=(payers)=>{
    var Payer;
    if (payers == null || payers.total === 0 || payers.current.count === 0)
    Payer = "None";
  else {
    Payer = payers.current.data[0].plan_name;
  }
  return Payer;
}

export const phoneNumber=(phone)=>{
    var PhoneNumber;
  if (phone.length === 0) PhoneNumber = "not-available";
  else {
    PhoneNumber = phone[0].phone_number;
  }    
  
  return PhoneNumber;
}

export const reStructure=(PhoneNumber)=>{
    if(PhoneNumber==="not-available") return PhoneNumber;
    PhoneNumber =
  "(" +
  PhoneNumber.slice(0, 3) +
  ") " +
  PhoneNumber.slice(3, 6) +
  "-" +
  PhoneNumber.slice(6);

  return PhoneNumber;

}

export const pair=(attribute,value)=>{
  return (
    <div className="d-flex">
    <DarkText>{attribute}:</DarkText> <LightText>{value}</LightText></div>
  );
}
export const light=(age,gender)=>{
  return (<LightText>{age},{" "}{gender}</LightText>);
}

export const dropdown=(phone)=>{
  return (
    phone.length > 1 ? (
      <DropDownLi className="d-inline-block">
        <Count className="ml-4 w-auto h-auto px-4">+{phone.length - 1}</Count>
        <DropDownContent className="position-absolute" >
          {phone.map((index) => {
            return (
              <div>
                {index.phone_number.length > 10 ? (
                  <SubA className="d-block pt-4 px-6 ">{index.phone_number} </SubA>
                ) : (
                  <SubA className="d-block py-3 px-6 ">{reStructure(index.phone_number)}</SubA>
                )}
              </div>
            );
          })}
        </DropDownContent>
      </DropDownLi>
    ) : (
      <div />
    )
  );
}