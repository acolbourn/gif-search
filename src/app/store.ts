import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from '../features/theme/themeSlice';
import searchReducer from '../features/search/searchSlice';
import { gifSearchApi } from '../features/search/gifSearchService';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    search: searchReducer,
    [gifSearchApi.reducerPath]: gifSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifSearchApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
