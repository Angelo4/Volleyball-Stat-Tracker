import { Grid } from '@mui/material';
import { ActionCenterContainer } from '../../components/vb_action_center';
import SessionStatsContainer from './SessionStatsContainer';

const TrackGame = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <ActionCenterContainer />
      </Grid>
      <Grid item xs={12} md={6} lg={9}>
        <SessionStatsContainer />
      </Grid>
    </Grid>
  );
};

export default TrackGame;
