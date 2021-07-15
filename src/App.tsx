import React, { useMemo } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useAppSelector } from './app/hooks';
import generateTheme from './features/theme/theme';
import { selectTheme } from './features/theme/themeSlice';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';

function App() {
  const isDarkMode = useAppSelector(selectTheme);
  const theme = useMemo(() => generateTheme(isDarkMode), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
