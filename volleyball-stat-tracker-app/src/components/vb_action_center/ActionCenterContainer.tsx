import { Button, ButtonGroup, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { statKeeperActions } from '../../redux/StatsKeeper';
import ActionButtonGroup from './ActionButtonGroup';
import { ActionCreators } from 'redux-undo';
import { Undo, Redo, MoreHoriz } from '@mui/icons-material';

const ActionCenterContainer = () => {
  const dispatch = useDispatch();

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }}>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch(ActionCreators.undo());
              }}
            >
              <Undo />
            </Button>
            <Button>
              <Redo />
            </Button>
            <Button>
              <MoreHoriz />
            </Button>
          </ButtonGroup>
        </Grid>
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
    </Grid>
  );
};

export default ActionCenterContainer;
