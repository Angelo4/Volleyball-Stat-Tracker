import { Tab, Tabs, Typography } from '@mui/material';
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
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab value="Overall" label="Overall" />
        {/* <Tab value="Scoring" label="Scoring" />
        <Tab value="Attack" label="Attack" />
        <Tab value="Block" label="Block" />
        <Tab value="Serve" label="Serve" />
        <Tab value="Reception" label="Reception" />
        <Tab value="Dig" label="Dig" />
        <Tab value="Set" label="Set" /> */}
      </Tabs>

      {value === 'Overall' && <OverallSection />}
      {value === 'Scoring' && (
        <Typography variant="h5" sx={{ paddingTop: 2 }}>
          Coming soon...
        </Typography>
      )}
      {value === 'Attack' && <AttackSection />}
      {value === 'Block' && <BlockSection />}
      {value === 'Serve' && (
        <Typography variant="h5" sx={{ paddingTop: 2 }}>
          Coming soon...
        </Typography>
      )}
      {value === 'Reception' && (
        <Typography variant="h5" sx={{ paddingTop: 2 }}>
          Coming soon...
        </Typography>
      )}
      {value === 'Dig' && (
        <Typography variant="h5" sx={{ paddingTop: 2 }}>
          Coming soon...
        </Typography>
      )}
      {value === 'Set' && (
        <Typography variant="h5" sx={{ paddingTop: 2 }}>
          Coming soon...
        </Typography>
      )}
    </>
  );
};

export default SessionStatsContainer;
