import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchState {
  query: string;
  page: number;
}

const initialState: SearchState = {
  query: '',
  page: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    submitQuery: (state, action: PayloadAction<string>) => {
      state.page = 1;
      state.query = action.payload;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { submitQuery, changePage } = searchSlice.actions;

export const selectSearchParams = (state: RootState) => state.search;

export default searchSlice.reducer;
