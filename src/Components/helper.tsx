import "@innovaccer/design-system/css";

export const date = (date: string) => {
  var rdate = date.slice(5, 7) + "/" + date.slice(8) + "/" + date.slice(0, 4);
  return rdate;
};
export const phoneNumber = (phone: any) => {
  var PhoneNumber;
  if (phone.length === 0) PhoneNumber = "-";
  else {
    PhoneNumber = phone[0].phone_number;
  }
  return PhoneNumber;
};

export const reStructure = (PhoneNumber: string) => {
  if (PhoneNumber === "-") return PhoneNumber;
  PhoneNumber =
    "(" +
    PhoneNumber.slice(0, 3) +
    ") " +
    PhoneNumber.slice(3, 6) +
    "-" +
    PhoneNumber.slice(6);

  return PhoneNumber;
};
export const payer = (payers: any) => {
  var Payer;
  if (payers == null || payers.total === 0 || payers.current.count === 0)
    Payer = "-";
  else {
    Payer = payers.current.data[0].plan_name;
  }
  return Payer;
};


