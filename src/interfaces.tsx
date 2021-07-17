import { Dispatch, SetStateAction } from "react";

interface Number {
  phone_number: string;
  preferred: boolean;
  sanitized: string;
}
interface subattribution {
  key: string;
  value: string;
  display_name: string;
}
interface pcp {
  region_name: string;
  date_of_attribution: string;
  plan_id: string;
  region_id: string;
  provider_name: string;
  plan_name: string;
  organization_name: string;
  facility_name: string;
  payer_name: string;
}

interface payerData {
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

interface currentPayer {
  count: number;
  data: payerData[];
}

interface payer {
  total: number;
  current: currentPayer;
}
export interface PatientData {
  duplicates: string[];
  payers: payer;
  firstName: string;
  middleName: string;
  lastName: string;
  is_deceased: boolean;
  empi: string;
  member_id: string[];
  gender: string;
  age: string;
  dob: string;
  attribution: subattribution[];
  primary_care_provider: pcp;
  is_disabled: boolean;
  should_breakglass: boolean;
  doNotContact: boolean;
  has_legal_hold: boolean;
  phone_number: Number[];
}

export interface Data {
  data: PatientData;
}
export interface DataArray {
  data: Data[];
}
interface timing {
  opensOn: number;
  closesOn: number;
  day: string;
  status: string;
}
interface phoneNumber {
  value: string;
  type: string;
}

interface facility {
  resourceId: string;
  address: string;
  phoneNumbers: phoneNumber[];
  emailIds: string[];
  operationalTimings: timing[];
}
export interface ResourceType {
  name: string;
  source: string;
  description: string;
  nameDescription: string;
  websiteLinks: string[];
  populationFocus: string[];
  active: boolean;
  upVotes: number;
  downVotes: number;
  resourceType: string;
  facilities: facility[];
}
export interface ResourceDataType {
  data: ResourceType;
}
interface children {
  label: string;
  value: string;
  count: string;
}

interface SubResource {
  label: string;
  value: string;
  id?: string;
  sheetIndex?: number;
  count?: number | string;
  children?: children[];
}
export interface SingleResourceData {
  label: string;
  value: string;
  count?: number;
  children?: SubResource[];
  id?: string;
}

export interface ResourceData {
  nodes: SingleResourceData[];
}

export interface ModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  showList: Dispatch<SetStateAction<boolean>>;
  setZip: Dispatch<SetStateAction<string>>;
  setResource: Dispatch<SetStateAction<string>>;
  setResourceData: Dispatch<SetStateAction<SingleResourceData>>;
  setChildren: Dispatch<SetStateAction<number>>;
}

export interface FindResourceProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  input: string;
  showList: Dispatch<SetStateAction<boolean>>;
  setZip: Dispatch<SetStateAction<string>>;
  setResource: Dispatch<SetStateAction<string>>;
  setResourceData: Dispatch<SetStateAction<SingleResourceData>>;
  setChildren: Dispatch<SetStateAction<number>>;
}

export interface sidesheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: ResourceType;
}
