import { Tab, Tabs } from '@mui/material';
import React from 'react';
import AttackSection from './vb_stat_display/AttackSection';

const SessionStatsContainer = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="Overall" label="Overall" />
        <Tab value="Scoring" label="Scoring" />
        <Tab value="Attack" label="Attack" />
        <Tab value="Block" label="Block" />
        <Tab value="Serve" label="Serve" />
        <Tab value="Reception" label="Reception" />
        <Tab value="Dig" label="Dig" />
        <Tab value="Set" label="Set" />
      </Tabs>

      <AttackSection />
    </>
  );
};

export default SessionStatsContainer;
