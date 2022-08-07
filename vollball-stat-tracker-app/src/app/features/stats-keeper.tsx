import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { VbActionResult } from '../../models/VBActionResult';

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

const incrementAttackPoint = createAction<undefined>(
  'attack/success/increment',
);
const incrementAttackSuccess = createAction<undefined>(
  'attack/point/increment',
);
const incrementAttackError = createAction<undefined>('attack/error/increment');

const incrementBlockPoint = createAction<undefined>('block/success/increment');
const incrementBlockSuccess = createAction<undefined>('block/point/increment');
const incrementBlockError = createAction<undefined>('block/error/increment');

export const sessionStatsReducer = createReducer(initialState, (builder) => {
  builder
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
    .addCase(incrementBlockPoint, (state) => {
      state.block.point = state.block.point == null ? 0 : state.block.point++;
    })
    .addCase(incrementBlockSuccess, (state) => {
      state.block.success++;
    })
    .addCase(incrementBlockError, (state) => {
      state.block.error++;
    });
});

export { incrementAttackPoint, incrementAttackSuccess, incrementAttackError };
