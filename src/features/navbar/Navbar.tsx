import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SearchBar from '../search/SearchBar';
import ThemeButton from '../theme/ThemeButton';
import useStyles from './styles/NavbarStyles';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {props.children}
    </Slide>
  );
}

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <div className={classes.searchBar}>
              <SearchBar />
            </div>
            <div className={classes.themeButton}>
              <ThemeButton />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.offset} />
    </>
  );
}
