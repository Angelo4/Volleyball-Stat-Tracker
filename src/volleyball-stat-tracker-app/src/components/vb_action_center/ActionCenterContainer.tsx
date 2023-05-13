import { Grid, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { statKeeperActions } from '../../redux/StatsKeeper';
import ActionButtonGroup from './ActionButtonGroup';
import ActionCenterOptions from './ActionCenterOptions';

const ActionCenterContainer = () => {
  const dispatch = useDispatch();

  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionCenterOptions />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionButtonGroup
            title='Attack'
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
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionButtonGroup
            title='Block'
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
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionButtonGroup
            title='Serve'
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
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionButtonGroup
            title='Set'
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
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionButtonGroup
            title='Reception'
            handleSuccessClick={() => {
              dispatch(statKeeperActions.incrementReceptionSuccess());
            }}
            handleErrorClick={() => {
              dispatch(statKeeperActions.incrementReceptionError());
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ActionButtonGroup
            title='Dig'
            handleSuccessClick={() => {
              dispatch(statKeeperActions.incrementDigSuccess());
            }}
            handleErrorClick={() => {
              dispatch(statKeeperActions.incrementDigError());
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ActionCenterContainer;
