import React from "react";
import { VerticalNav } from "@innovaccer/design-system";
import Clinical from "pages/PatientSummary/clinical";
import Community from "pages/PatientSummary/community";

const VerticalNavigation = () => {
  const data = [
    {
      name: "clinical_data",
      label: "Clinical Data",
      icon: "assignment_ind",
      link: "/clinical_data",
    },
    {
      name: "care_management",
      label: "Care Management",
      icon: "forum",
      subMenu: [
        {
          name: "care_management.timeline",
          label: "Timeline",
          icon: "people",
          link: "/timeline",
        },
        {
          name: "care_management.care_protocol",
          label: "Care Protocol",
          icon: "fact_check",
          link: "/care_protocol",
        },
        {
          name: "care_management.assessments",
          label: "Assessments",
          icon: "assessment",
          link: "/assesment",
        },
        {
          name: "care_management.tasks",
          label: "Tasks",
          icon: "alarm",
          link: "/tasks",
        },
        {
          name: "care_management.goals",
          label: "Goals",
          icon: "golf_course",
          link: "/goals",
        },
        {
          name: "care_management.care_plans",
          label: "Care Plans",
          icon: "accessibility_new",
          link: "/care_plans",
        },
        {
          name: "care_management.medical_adherence",
          label: "Medical Adherence",
          icon: "local_pharmacy",
          link: "/medical_adherence",
        },
        {
          name: "care_management.community_resources",
          label: "Community Resources",
          icon: "businesses",
          link: "/community",
        },
      ],
    },
    {
      name: "risk",
      label: "Risk",
      icon: "favorite",
      link: "/risk",
    },
    {
      name: "claims",
      label: "Claims",
      icon: "receipt",
      link: "/claims",
    },
    {
      name: "profile",
      label: "Profile",
      icon: "account_circle",
      link: "/profile",
    },

    {
      name: "manual_entry",
      label: "Manual Entry",
      icon: "edit",
      link: "/manual_entry",
    },
    {
      name: "patient_notes",
      label: "Patient Notes",
      icon: "note_add",
      link: "/patient_notes",
    },
    {
      name: "documents",
      label: "Documents",
      icon: "assignment",
      link: "/document",
    },
  ];

  const [active, setActive] = React.useState({
    name: "care_management.timeline",
  });

  const onClickHandler = (menu) => {
    console.log("menu-clicked: ", menu);
    setActive(menu);
  };

  return (
    <div
      style={{
        height: "calc(80vh)",
        background: "var(--secondary-lightest)",
        display: "flex",
        width: "100%",
      }}
    >
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        hoverable={false}
      />
      {active.link === "/community" ? <Community /> : <Clinical />}
    </div>
  );
};

export default VerticalNavigation;
