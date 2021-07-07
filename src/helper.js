import "@innovaccer/design-system/css";

export const date = (date) => {
  var rdate = date.slice(5, 7) + "/" + date.slice(8) + "/" + date.slice(0, 4);
  return rdate;
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export const populationFocus = (focus) => {
  if (focus) return focus.length === 0 || focus[0] === "" ? "NA" : focus[0];
  return "NA";
};

export const address = (address) => {
  return address === "" ? "NA" : address;
};

export const fullName = (firstName, middleName, lastName) => {
  var fullName = "";
  if (lastName !== "") fullName += capitalize(lastName);
  if (firstName !== "") fullName += ", " + capitalize(firstName);
  if (middleName !== "") fullName += " " + capitalize(middleName);
  return fullName;
};

export const Payer = (payers, source) => {
  var Payer;
  if (payers == null || payers.total === 0 || payers.current.count === 0) {
    if (source === "list") Payer = "None";
    else Payer = "-";
  } else {
    Payer = payers.current.data[0].plan_name;
  }
  return Payer;
};

export const phoneNumber = (phone, source) => {
  var PhoneNumber;
  if (phone.length === 0) {
    if (source === "list") PhoneNumber = "not-available";
    if (source === "refer") PhoneNumber = "NA";
    else PhoneNumber = "-";
  } else if (source === "refer") PhoneNumber = phone[0].value;
  else {
    PhoneNumber = phone[0].phone_number;
  }

  return PhoneNumber;
};

export const reStructure = (PhoneNumber) => {
  if (
    PhoneNumber === "not-available" ||
    PhoneNumber === "-" ||
    PhoneNumber === "NA"
  )
    return PhoneNumber;
  if (PhoneNumber.length > 6)
    PhoneNumber =
      "(" +
      PhoneNumber.slice(0, 3) +
      ") " +
      PhoneNumber.slice(3, 6) +
      "-" +
      PhoneNumber.slice(6);
  else {
    PhoneNumber = "(" + PhoneNumber.slice(0, 3) + ") " + PhoneNumber.slice(3);
  }
  return PhoneNumber;
};

export const Time = (data) => {
  if (data / 3600 >= 12) {
    let hours = Math.floor(data / 3600) - 12;
    let minutes = (data / 3600 - hours - 12) * 60;

    return hours + ":" + minutes + " PM";
  } else {
    let hours = Math.floor(data / 3600);
    let minutes = (data / 3600 - hours) * 60;

    return hours + ":" + minutes + " AM";
  }
};
