import { Grid } from '@mui/material';
import SessionStatsContainer from './SessionStatsContainer';
import ActionCenterContainer from '../../components/vb_action_center/ActionCenterContainer';

const TrackGame = () => {
  return (
    <Grid container spacing={2}>
      <ActionCenterContainer />
      <Grid item xs={12}>
        <SessionStatsContainer />
      </Grid>
    </Grid>
  );
};

export default TrackGame;