import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greeting.reducer';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
