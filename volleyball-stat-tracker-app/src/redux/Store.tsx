import { configureStore } from '@reduxjs/toolkit';
import { sessionStatsReducer } from './StatsKeeper';
import undoable from 'redux-undo';

export const store = configureStore({
  reducer: {
    sessionStats: undoable(sessionStatsReducer),
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
