import { Button, Container, Grid, Typography } from '@mui/material';
import { useReducer } from 'react';
import { VbActionResult } from '../models/VBActionResult';
import ActionButtonGroup from './action-button-group';

type VolleyBallStats = {
  attack: VbActionResult;
  block: VbActionResult;
  serve: VbActionResult;
  reception: VbActionResult;
  dig: VbActionResult;
  set: VbActionResult;
};

const initialState: VolleyBallStats = {
  attack: {
    point: 0,
    success: 0,
    error: 0,
  },
  block: {
    point: 0,
    success: 0,
    error: 0,
  },
  serve: {
    point: 0,
    success: 0,
    error: 0,
  },
  reception: {
    success: 0,
    error: 0,
  },
  dig: {
    success: 0,
    error: 0,
  },
  set: {
    point: 0,
    success: 0,
    error: 0,
  },
};

type ACTIONTYPE =
  | { type: 'success'; payload: number }
  | { type: 'error'; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        attack: {
          ...state.attack,
          success: state.attack.success + action.payload,
        },
      };
    case 'error':
      state.attack.error += action.payload;
      return state;
    default:
      throw new Error();
  }
}

const TrackGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const attackSuccess = () => {
    dispatch({ type: 'success', payload: 1 });
  };

  return (
    <Container>
      <Typography variant="h4">{state.attack.success}</Typography>
      <Button variant="contained" onClick={attackSuccess}>
        Attack Good
      </Button>
      <Grid container spacing={2}>
        <ActionButtonGroup title="Attack" pointEnabled />
        <ActionButtonGroup title="Block" pointEnabled />
        <ActionButtonGroup title="Serve" pointEnabled />
        <ActionButtonGroup title="Set" pointEnabled />
        <ActionButtonGroup title="Reception" />
        <ActionButtonGroup title="Dig" />
      </Grid>
    </Container>
  );
};

export default TrackGame;
