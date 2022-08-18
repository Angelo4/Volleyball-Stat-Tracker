import { Grid } from '@mui/material';
import DataBadge from '../../components/vb_stat_display/DataBadge';
import OverallDefenseTable from '../../components/vb_stat_display/OverallDefenseTable';
import OverallScoringTable from '../../components/vb_stat_display/OverallScoringTable';
import OverallTable from '../../components/vb_stat_display/OverallTable';

export const OverallSection = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      <Grid item xs={6}>
        <OverallTable />
      </Grid>
      <Grid item xs={6}>
        <DataBadge title="Total Points" data={5} />
      </Grid>
    </Grid>
  );
};

export default OverallSection;
