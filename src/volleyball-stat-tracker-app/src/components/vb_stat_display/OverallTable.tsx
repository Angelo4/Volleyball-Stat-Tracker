import { Grid } from '@mui/material';
import React from 'react';
import OverallDefenseTable from './OverallDefenseTable';
import OverallScoringTable from './OverallScoringTable';

const OverallTable = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <OverallScoringTable />
      </Grid>
      <Grid item xs={12}>
        <OverallDefenseTable />
      </Grid>
    </Grid>
  );
};

export default OverallTable;
