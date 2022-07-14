import { Button, Typography } from '@mui/material';
import React, { useReducer } from 'react';

interface VbActionResult {
  success: number;
  error: number;
}

interface VbActionOffenseResult extends VbActionResult {
  point: number;
}

type VolleyBallStats = {
  attack: VbActionOffenseResult;
  block: VbActionOffenseResult;
  serve: VbActionOffenseResult;
  reception: VbActionResult;
  dig: VbActionResult;
  set: VbActionOffenseResult;
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
    console.log(state);
    dispatch({ type: 'success', payload: 1 });
  };

  return (
    <>
      <div>track-game</div>
      <Typography variant="h4">{state.attack.success}</Typography>
      <Button variant="contained" onClick={attackSuccess}>
        Attack Good
      </Button>
    </>
  );
};

export default TrackGame;
