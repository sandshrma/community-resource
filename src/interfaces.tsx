interface Number {
  phone_number: string;
  preferred: boolean;
  sanitized: string;
}

export interface Data {
  data: {
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
        ];
      };
    };

    firstName: string;
    middleName: string;
    lastName: string;
    is_deceased: boolean;
    empi: string;
    member_id: string[];
    gender: string;
    age: string;
    dob: string;
    attribution: [
      {
        key: string;
        value: string;
        display_name: string;
      },
      {
        key: string;
        value: string;
        display_name: string;
      }
    ];

    primary_care_provider: {
      region_name: string;
      date_of_attribution: string;
      plan_id: string;
      region_id: string;
      provider_name: string;
      plan_name: string;
      organization_name: string;
      facility_name: string;
      payer_name: string;
    };
    is_disabled: boolean;
    should_breakglass: boolean;
    doNotContact: boolean;
    has_legal_hold: boolean;
    phone_number: Number[];
  };
}

export interface PatientData {
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
      ];
    };
  };

  firstName: string;
  middleName: string;
  lastName: string;
  is_deceased: boolean;
  empi: string;
  member_id: string[];
  gender: string;
  age: string;
  dob: string;
  attribution: [
    {
      key: string;
      value: string;
      display_name: string;
    },
    {
      key: string;
      value: string;
      display_name: string;
    }
  ];

  primary_care_provider: {
    region_name: string;
    date_of_attribution: string;
    plan_id: string;
    region_id: string;
    provider_name: string;
    plan_name: string;
    organization_name: string;
    facility_name: string;
    payer_name: string;
  };
  is_disabled: boolean;
  should_breakglass: boolean;
  doNotContact: boolean;
  has_legal_hold: boolean;
  phone_number: Number[];
}

export interface DataArray {
  data: Data[];
}

export interface ResourceType {
  data: {
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
    facilities: [
      {
        resourceId: string;
        address: string;
        phoneNumbers: [
          {
            value: string;
            type: string;
          }
        ];
        emailIds: string[];
        operationalTimings: [
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          },
          {
            opensOn: number;
            closesOn: number;
            day: string;
            status: string;
          }
        ];
      }
    ];
  };
}
