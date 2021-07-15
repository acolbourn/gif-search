import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.isDarkMode;

export default themeSlice.reducer;
