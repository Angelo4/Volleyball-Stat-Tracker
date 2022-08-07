import { configureStore } from '@reduxjs/toolkit';
import { sessionStatsReducer } from './StatsKeeper';

export default configureStore({
  reducer: {
    sessionStats: sessionStatsReducer,
  },
});
