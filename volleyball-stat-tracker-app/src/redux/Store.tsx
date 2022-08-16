import { configureStore } from '@reduxjs/toolkit';
import { sessionStatsReducer } from './StatsKeeper';

export const store = configureStore({
  reducer: {
    sessionStats: sessionStatsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
