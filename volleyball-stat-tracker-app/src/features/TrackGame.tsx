import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { connect } from 'react-redux';
import SessionStatsContainer from '../components/SessionStatsContainer';
import ActionCentreContainer from '../components/vb_action_center/ActionCentreContainer';

const TrackGame = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <SessionStatsContainer />
      </Grid>
      {/* <Divider /> */}
      <ActionCentreContainer />
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  const { error, success } = state.sessionStats.attack;
  return { error: error, success: success };
};

export default TrackGame;
