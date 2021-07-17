import { configureStore } from '@reduxjs/toolkit';
import { signin } from '../features/signin/signin';

const store = configureStore({
  reducer: {
    signin: signin.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
