import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tableReducer } from './reducers/table'

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;