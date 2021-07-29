import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import ThemeButton from '../theme/ThemeButton';
import BackToTop from './BackToTop';
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
  let { pathname } = useLocation();

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar className={classes.navbar}>
            <div className={classes.navLinks}>
              {pathname !== '/' && (
                <Link to='/'>
                  <IconButton aria-label='home'>
                    <HomeIcon />
                  </IconButton>
                </Link>
              )}
              {pathname !== '/favorites' && (
                <Link to='/favorites'>
                  <IconButton aria-label='favorites'>
                    <FavoriteIcon />
                  </IconButton>
                </Link>
              )}
            </div>
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
      <BackToTop />
    </>
  );
}
