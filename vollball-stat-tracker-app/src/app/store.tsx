import { configureStore } from '@reduxjs/toolkit';
import { sessionStatsReducer } from './features/stats-keeper';

export default configureStore({
  reducer: {
    sessionStats: sessionStatsReducer,
  },
});
