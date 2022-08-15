import { Divider, Grid } from '@mui/material';
import SessionStatsContainer from '../components/SessionStatsContainer';
import ActionCentreContainer from '../components/vb_action_center/ActionCentreContainer';

const TrackGame = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SessionStatsContainer />
      </Grid>
      <ActionCentreContainer />
    </Grid>
  );
};

//sdfgjnrgosng
export default TrackGame;
