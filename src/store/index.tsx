import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Reducer from './slice/bookSlice';

import { booksApi } from 'src/services/api';

const rootReducer = combineReducers({
   booksandCharacters: Reducer,
   [booksApi.reducerPath]: booksApi.reducer
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      }).concat(booksApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
