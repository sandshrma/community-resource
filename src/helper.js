import "@innovaccer/design-system/css";

export const date = (date) => {
  var rdate = date.slice(5, 7) + "/" + date.slice(8) + "/" + date.slice(0, 4);
  return rdate;
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

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
    else PhoneNumber = "-";
  } else {
    PhoneNumber = phone[0].phone_number;
  }

  return PhoneNumber;
};

export const reStructure = (PhoneNumber) => {
  if (PhoneNumber === "not-available" || PhoneNumber === "-")
    return PhoneNumber;
  PhoneNumber =
    "(" +
    PhoneNumber.slice(0, 3) +
    ") " +
    PhoneNumber.slice(3, 6) +
    "-" +
    PhoneNumber.slice(6);

  return PhoneNumber;
};
