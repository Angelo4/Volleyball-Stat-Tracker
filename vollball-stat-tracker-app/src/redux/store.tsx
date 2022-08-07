import { configureStore } from '@reduxjs/toolkit';
import { sessionStatsReducer } from './stats-keeper';

export default configureStore({
  reducer: {
    sessionStats: sessionStatsReducer,
  },
});
