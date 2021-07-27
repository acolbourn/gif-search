import React, { useMemo } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import generateTheme from './features/theme/theme';
import { selectTheme } from './features/theme/themeSlice';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './features/navbar/Navbar';
import GifGrid from './features/gifDisplay/GifGrid';
import Favorites from './features/favorites/Favorites';
import useStyles from './AppStyles';
import GifSinglePage from './features/gifDisplay/GifSinglePage';

function App() {
  const classes = useStyles();
  const isDarkMode = useAppSelector(selectTheme);
  const theme = useMemo(() => generateTheme(isDarkMode), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.appRoot}>
          <div className={classes.navbarArea}>
            <Navbar />
          </div>
          <div className={classes.pageArea}>
            <Switch>
              <Route path='/favorites'>
                <Favorites />
              </Route>
              <Route path='/gifs/:id'>
                <GifSinglePage />
              </Route>
              <Route path='/'>
                <GifGrid />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
