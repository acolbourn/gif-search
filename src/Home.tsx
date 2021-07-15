import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchBar from './features/search/SearchBar';
import GifList from './features/gifDisplay/GifList';
import ThemeButton from './features/theme/ThemeButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeRoot: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 3fr 1fr',
      gridTemplateAreas: `
        'headerArea'
        'searchArea'
        'gifArea'
        'paginationArea'
      `,
    },
    headerArea: {
      gridArea: 'headerArea',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    searchArea: {
      gridArea: 'searchArea',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      <header className={classes.headerArea}>
        <ThemeButton />
      </header>
      <div className={classes.searchArea}>
        <SearchBar />
      </div>
      <div className={classes.gifArea}>
        <GifList />
      </div>
      <div className={classes.paginationArea}>Pagination</div>
    </div>
  );
};

export default Home;
