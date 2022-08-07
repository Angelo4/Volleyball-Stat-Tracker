import { Container, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { statKeeperActions } from '../redux/stats-keeper';
import ActionButtonGroup from './action-button-group';

const TrackGame = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Grid container spacing={2}>
        <ActionButtonGroup
          title="Attack"
          pointEnabled
          handlePointClick={() =>
            dispatch(statKeeperActions.incrementAttackPoint())
          }
          handleSuccessClick={() => {
            dispatch(statKeeperActions.incrementAttackSuccess());
          }}
          handleErrorClick={() => {
            dispatch(statKeeperActions.incrementAttackError());
          }}
        />
        <ActionButtonGroup
          title="Block"
          pointEnabled
          handlePointClick={() =>
            dispatch(statKeeperActions.incrementBlockPoint())
          }
          handleSuccessClick={() => {
            dispatch(statKeeperActions.incrementBlockSuccess());
          }}
          handleErrorClick={() => {
            dispatch(statKeeperActions.incrementBlockError());
          }}
        />
        <ActionButtonGroup
          title="Serve"
          pointEnabled
          handlePointClick={() =>
            dispatch(statKeeperActions.incrementServePoint())
          }
          handleSuccessClick={() => {
            dispatch(statKeeperActions.incrementServeSuccess());
          }}
          handleErrorClick={() => {
            dispatch(statKeeperActions.incrementServeError());
          }}
        />
        <ActionButtonGroup
          title="Set"
          pointEnabled
          handlePointClick={() =>
            dispatch(statKeeperActions.incrementSetPoint())
          }
          handleSuccessClick={() => {
            dispatch(statKeeperActions.incrementSetSuccess());
          }}
          handleErrorClick={() => {
            dispatch(statKeeperActions.incrementSetError());
          }}
        />
        <ActionButtonGroup
          title="Reception"
          handleSuccessClick={() => {
            dispatch(statKeeperActions.incrementReceptionSuccess());
          }}
          handleErrorClick={() => {
            dispatch(statKeeperActions.incrementReceptionError());
          }}
        />
        <ActionButtonGroup
          title="Dig"
          handleSuccessClick={() => {
            dispatch(statKeeperActions.incrementDigSuccess());
          }}
          handleErrorClick={() => {
            dispatch(statKeeperActions.incrementDigError());
          }}
        />
      </Grid>
    </Container>
  );
};

export default TrackGame;
