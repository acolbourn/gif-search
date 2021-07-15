import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    submitQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { submitQuery } = searchSlice.actions;

export const selectSearchParams = (state: RootState) => state.search;

export default searchSlice.reducer;
