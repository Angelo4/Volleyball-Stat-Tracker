import { Grid } from '@mui/material';
import OverallTable from '../../components/vb_stat_display/OverallTable';

export const OverallSection = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      <Grid item xs={6}>
        <OverallTable />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default OverallSection;
