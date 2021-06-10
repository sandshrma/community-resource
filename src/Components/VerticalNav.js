import React from 'react';
import { VerticalNav } from '@innovaccer/design-system';
import Community from '../Pages/PatientSummary/community';
import {Switch, Route} from 'react-router-dom';

const VerticalNavigation=() => {

  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind',
      link: '/clinical_data',
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses',
          link: '/community',
        }
      ]
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
        name: 'claims',
        label: 'Claims',
        icon: 'receipt'
      },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },

    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        hoverable={false}
      />
       <Switch>
        <Route path="/community"/>
        <Community/>
      </Switch>
    </div>
  );

}

export default VerticalNavigation;