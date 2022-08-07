import { Container, Divider, Stack, Typography } from '@mui/material';
import { connect } from 'react-redux';
import SessionStatsContainer from '../components/SessionStatsContainer';
import ActionCentreContainer from '../components/vb_action_center/ActionCentreContainer';

const TrackGame = () => {
  return (
    <>
      <Container>
        <Stack spacing={2}>
          <SessionStatsContainer />
          <Divider />
          <ActionCentreContainer />
        </Stack>
      </Container>
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { error, success } = state.sessionStats.attack;
  return { error: error, success: success };
};

export default TrackGame;
