import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { VbActionResult } from '../models/VBActionResult';

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

// Attack actions
const incrementAttackPoint = createAction<undefined>(
  'attack/success/increment',
);
const incrementAttackSuccess = createAction<undefined>(
  'attack/point/increment',
);
const incrementAttackError = createAction<undefined>('attack/error/increment');

// Block actions
const incrementBlockPoint = createAction<undefined>('block/success/increment');
const incrementBlockSuccess = createAction<undefined>('block/point/increment');
const incrementBlockError = createAction<undefined>('block/error/increment');

// Serve actions
const incrementServePoint = createAction<undefined>('serve/success/increment');
const incrementServeSuccess = createAction<undefined>('serve/point/increment');
const incrementServeError = createAction<undefined>('serve/error/increment');

// Reception actions
const incrementReceptionSuccess = createAction<undefined>(
  'reception/point/increment',
);
const incrementReceptionError = createAction<undefined>(
  'reception/error/increment',
);

// Dig actions
const incrementDigSuccess = createAction<undefined>('dig/point/increment');
const incrementDigError = createAction<undefined>('dig/error/increment');

// Set actions
const incrementSetPoint = createAction<undefined>('set/success/increment');
const incrementSetSuccess = createAction<undefined>('set/point/increment');
const incrementSetError = createAction<undefined>('set/error/increment');

export const sessionStatsReducer = createReducer(initialState, (builder) => {
  builder
    // Attack cases
    .addCase(incrementAttackPoint, (state) => {
      state.attack.point =
        state.attack.point == null ? 0 : state.attack.point + 1;
    })
    .addCase(incrementAttackSuccess, (state) => {
      state.attack.success++;
    })
    .addCase(incrementAttackError, (state) => {
      state.attack.error++;
    })
    // Block cases
    .addCase(incrementBlockPoint, (state) => {
      state.block.point = state.block.point == null ? 0 : state.block.point++;
    })
    .addCase(incrementBlockSuccess, (state) => {
      state.block.success++;
    })
    .addCase(incrementBlockError, (state) => {
      state.block.error++;
    })
    // Serve cases
    .addCase(incrementServePoint, (state) => {
      state.serve.point = state.serve.point == null ? 0 : state.serve.point + 1;
    })
    .addCase(incrementServeSuccess, (state) => {
      state.serve.success++;
    })
    .addCase(incrementServeError, (state) => {
      state.serve.error++;
    })
    // Reception cases
    .addCase(incrementReceptionSuccess, (state) => {
      state.reception.success++;
    })
    .addCase(incrementReceptionError, (state) => {
      state.reception.error++;
    })
    // Dig cases
    .addCase(incrementDigSuccess, (state) => {
      state.dig.success++;
    })
    .addCase(incrementDigError, (state) => {
      state.dig.error++;
    })
    // Set cases
    .addCase(incrementSetPoint, (state) => {
      state.set.point = state.set.point == null ? 0 : state.set.point + 1;
    })
    .addCase(incrementSetSuccess, (state) => {
      state.set.success++;
    })
    .addCase(incrementSetError, (state) => {
      state.set.error++;
    });
});

export { incrementAttackPoint, incrementAttackSuccess, incrementAttackError };
