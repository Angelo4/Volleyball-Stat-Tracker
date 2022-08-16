import { Tab, Tabs } from '@mui/material';
import React from 'react';
import AttackSection from './AttackSection';
import BlockSection from './BlockSection';
import OverallSection from './OverallSection';

const SessionStatsContainer = () => {
  const [value, setValue] = React.useState('Overall');

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

      {value === 'Overall' && <OverallSection />}
      {value === 'Attack' && <AttackSection />}
      {value === 'Block' && <BlockSection />}
    </>
  );
};

export default SessionStatsContainer;
