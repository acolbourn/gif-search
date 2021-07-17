import React from 'react';
import { useGetGifsByNameQuery } from '../search/gifSearchService';
import { useAppSelector } from '../../app/hooks';
import { selectSearchParams } from '../search/searchSlice';
import Masonry from 'react-masonry-css';
import Gif from './Gif';
import useStyles from './styles/GifListStyles';

const GifList: React.FC = () => {
  const classes = useStyles();
  const { query } = useAppSelector(selectSearchParams);

  const { data, error, isLoading } = useGetGifsByNameQuery({
    q: query,
    gifsPerPage: 20,
    pageNumber: 1,
  });

  let gifs: JSX.Element[] | null;
  if (data) {
    gifs = data.data.map((gif) => (
      <Gif imageSrc={gif.images.fixed_width.url} alt={gif.title} key={gif.id} />
    ));
  } else {
    gifs = null;
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={classes.gifListRoot}>
      {error ? <div>Error</div> : null}
      {isLoading ? <div>Loading...</div> : null}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.masonryGrid}
        columnClassName={classes.masonryColumn}
      >
        {gifs}
      </Masonry>
    </div>
  );
};

export default GifList;
