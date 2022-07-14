import { ArtTrack } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React, { useReducer } from 'react';

type VolleyballActionResult = {
  success: number;
  error: number;
};

type VolleyBallStats = {
  attack: VolleyballActionResult;
  defence: VolleyballActionResult;
};

const initialState: VolleyBallStats = {
  attack: {
    success: 0,
    error: 0,
  },
  defence: {
    success: 0,
    error: 0,
  },
};

type ACTIONTYPE =
  | { type: 'success'; payload: number }
  | { type: 'error'; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  //   console.log(state);
  switch (action.type) {
    case 'success':
      return {
        ...state,
        attack: { success: state.attack.success + action.payload, error: 0 },
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

  //   const attackSuccess = () => {
  //     console.log(stats);
  //     setStats(stats.attack.success;
  //   };

  return (
    <>
      <div>track-game</div>
      <Typography variant="h4">{state.attack.success}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: 'success', payload: 1 });
        }}
      >
        Attack Good
      </Button>
    </>
  );
};

export default TrackGame;
