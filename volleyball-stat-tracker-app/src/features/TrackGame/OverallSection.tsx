import { Grid } from '@mui/material';
// import OverallRadarChart from '../../components/vb_stat_display/OverallRadarChart';
import OverallTable from '../../components/vb_stat_display/OverallTable';
import StatsStackGraph from '../../components/vb_stat_display/StatsStackGraph';

export const OverallSection = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      <Grid item xs={12} md={12} lg={6}>
        <OverallTable />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <StatsStackGraph />
      </Grid>
      {/* <Grid item xs={12}>
        <OverallRadarChart />
      </Grid> */}
    </Grid>
  );
};

export default OverallSection;
