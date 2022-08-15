import { Grid } from '@mui/material';
import SessionStatsContainer from '../components/SessionStatsContainer';
import ActionCenterContainer from '../components/vb_action_center/ActionCenterContainer';

const TrackGame = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SessionStatsContainer />
      </Grid>
      <ActionCenterContainer />
    </Grid>
  );
};

export default TrackGame;
