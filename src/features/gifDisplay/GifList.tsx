import React from 'react';
import { useGetGifsByNameQuery } from '../search/gifSearchService';
import { useAppSelector } from '../../app/hooks';
import { selectSearchParams } from '../search/searchSlice';
import Gif from './Gif';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifListRoot: {
      width: '100%',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 4px',
    },
    column: {
      padding: '0 4px',
      flex: '25%',
      maxWidth: '25%',
      [theme.breakpoints.down('sm')]: {
        flex: '50%',
        maxWidth: '50%',
      },
      [theme.breakpoints.down('xs')]: {
        flex: '100%',
        maxWidth: '100%',
      },
    },
  })
);

const GifList: React.FC = () => {
  const classes = useStyles();
  const { query } = useAppSelector(selectSearchParams);

  const { data, error, isLoading } = useGetGifsByNameQuery({
    q: query,
    gifsPerPage: 20,
    pageNumber: 1,
  });

  let content: JSX.Element[] | null;
  if (data) {
    const numOfGifs = data.data.length;
    let columns: JSX.Element[][] = [[], [], [], []];
    let currentColumn = 0;

    for (let i = 0; i < numOfGifs; i++) {
      const gif = data.data[i];
      columns[currentColumn].push(
        <Gif src={gif.images.fixed_width.url} alt={gif.title} key={gif.id} />
      );

      if (currentColumn >= 3) currentColumn = 0;
      else currentColumn++;
    }

    content = columns.map((column, idx) => (
      <div className={classes.column} key={idx}>
        {column}
      </div>
    ));
  } else {
    content = null;
  }

  return (
    <div className={classes.gifListRoot}>
      {error ? <div>Error</div> : null}
      {isLoading ? <div>Loading...</div> : null}
      <div className={classes.row}>{content}</div>
    </div>
  );
};

export default GifList;
