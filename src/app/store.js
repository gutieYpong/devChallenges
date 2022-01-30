import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import weatherReducer from '../features/weatherSlice';

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});