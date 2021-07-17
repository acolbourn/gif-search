import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Navbar from './features/navbar/Navbar';
import GifList from './features/gifDisplay/GifList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeRoot: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridAutoRows: 'min-content',
      gridTemplateAreas: `
        'navbarArea'
        'gifArea'
        'paginationArea'
      `,
    },
    navbarArea: {
      gridArea: 'navbarArea',
    },
    gifArea: {
      gridArea: 'gifArea',
    },
    paginationArea: {
      gridArea: 'paginationArea',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeRoot}>
      <div className={classes.navbarArea}>
        <Navbar />
      </div>
      <div className={classes.gifArea}>
        <GifList />
      </div>
      <div className={classes.paginationArea}>Pagination</div>
    </div>
  );
};

export default Home;
