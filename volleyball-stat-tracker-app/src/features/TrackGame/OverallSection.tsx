import { Grid } from '@mui/material';
import OverallDefenseTable from '../../components/vb_stat_display/OverallDefenseTable';
import OverallScoringTable from '../../components/vb_stat_display/OverallScoringTable';

export const OverallSection = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      <Grid item xs={12}>
        <OverallScoringTable />
      </Grid>
      <Grid item xs={12}>
        <OverallDefenseTable />
      </Grid>
    </Grid>
  );
};

export default OverallSection;
