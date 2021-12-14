import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from './reducers/photosReducer';

export const store = configureStore({
  reducer: { photos: photosSlice.reducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
