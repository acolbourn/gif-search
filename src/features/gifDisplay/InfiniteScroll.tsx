import React, { useEffect } from 'react';
import { Masonry, useInfiniteLoader } from 'masonic';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchGifs, GifSearchParams } from '../search/searchSlice';
import {
  selectAllGifs,
  selectSearchState,
  saveAPIOffset,
} from '../search/searchSlice';
import { Gif } from '../../types/GifApiResponse';
import GifLoader from './GifLoader';
import useStyles from './styles/InfiniteScrollStyles';

const InfiniteScroll = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const latestGifs = useAppSelector(selectAllGifs);
  const { query, status, currentAPIOffset } = useAppSelector(selectSearchState);
  const [gifs, setGifs] = React.useState<Gif[]>([]);
  const numGifsToFetch = 30;

  useEffect(() => {
    setGifs((prev) => [...prev, ...latestGifs]);
  }, [latestGifs]);

  const maybeLoadMore = useInfiniteLoader(
    async (startIndex) => {
      const searchParams: GifSearchParams = {
        query,
        limit: numGifsToFetch,
        offset: startIndex,
      };
      if (
        status !== 'loading' &&
        status !== 'error' &&
        startIndex !== currentAPIOffset
      ) {
        dispatch(saveAPIOffset(startIndex));
        dispatch(fetchGifs(searchParams));
      }
    },
    {
      isItemLoaded: (index, items) => !!items[index],
      minimumBatchSize: numGifsToFetch,
      threshold: 5,
    }
  );

  return (
    <main className={classes.container}>
      <div className={classes.masonic}>
        <Masonry
          onRender={maybeLoadMore}
          items={gifs}
          columnGutter={8}
          columnWidth={250}
          overscanBy={2}
          render={GifLoader}
        />
      </div>
    </main>
  );
};

export default InfiniteScroll;
