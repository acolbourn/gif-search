import React, { useEffect, useState } from 'react';
import { Masonry, useInfiniteLoader } from 'masonic';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchGifs, GifSearchParams } from '../search/searchSlice';
import { selectAllGifs, selectSearchState } from '../search/searchSlice';
import { Gif } from '../../types/GifApiResponse';
import { NUM_GIFS_PER_SEARCH } from '../search/SearchBar';
import GifLoader from './GifLoader';
import useStyles from './styles/InfiniteScrollStyles';

const InfiniteScroll = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const latestGifs = useAppSelector(selectAllGifs);
  const { query } = useAppSelector(selectSearchState);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [apiIndex, setApiIndex] = useState(0);

  // Add latest gifs from redux to total list
  useEffect(() => {
    setGifs((prev) => [...prev, ...latestGifs]);
  }, [latestGifs]);

  // Callback when user nears end of gifs - increments API index
  const updateApiIndex = (startIndex: number) => {
    if (startIndex !== apiIndex) {
      setApiIndex(startIndex);
    }
  };

  // When start index changes, dispatch api request to redux thunk
  useEffect(() => {
    // skip search if offset = 0, initial search handles that case
    if (apiIndex !== 0) {
      const searchParams: GifSearchParams = {
        query,
        limit: NUM_GIFS_PER_SEARCH,
        offset: apiIndex,
      };
      dispatch(fetchGifs(searchParams));
    }
  }, [query, dispatch, apiIndex]);

  // Trigger callback when user nears end of loaded items
  const maybeLoadMore = useInfiniteLoader(updateApiIndex, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: NUM_GIFS_PER_SEARCH,
    threshold: 5,
  });

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
