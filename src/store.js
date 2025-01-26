import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import todosReducer from './reducer';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});
