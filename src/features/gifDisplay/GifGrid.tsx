import React, { useEffect, useState } from 'react';
import { Masonry, useInfiniteLoader } from 'masonic';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchGifs, GifSearchParams } from '../search/searchSlice';
import { selectAllGifs, selectSearchState } from '../search/searchSlice';
import { NUM_GIFS_PER_SEARCH } from '../search/SearchBar';
import GifLoader from './GifLoader';
import GifStatus from './GifStatus';
import useStyles from './styles/GifGridStyles';

const GifGrid = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const gifs = useAppSelector(selectAllGifs);
  const { query, totalNumGifs } = useAppSelector(selectSearchState);
  const [apiIndex, setApiIndex] = useState(0);

  // Reset api index when new query is entered
  useEffect(() => {
    setApiIndex(0);
  }, [query]);

  // Callback when user nears end of gifs - increments API index
  const updateApiIndex = (startIndex: number) => {
    if (startIndex !== apiIndex) {
      setApiIndex(startIndex);
    }
  };

  // When start index changes, dispatch api request to redux thunk
  useEffect(() => {
    if (moreGifsAvailable(totalNumGifs, apiIndex)) {
      // skip search if offset = 0, handled by initial search
      if (apiIndex !== 0) {
        const searchParams: GifSearchParams = {
          query,
          limit: NUM_GIFS_PER_SEARCH,
          offset: apiIndex,
        };
        dispatch(fetchGifs(searchParams));
      } else {
        // force resize 1st run to fix masonic width overflow bug
        window.dispatchEvent(new Event('resize'));
      }
    }
  }, [query, dispatch, totalNumGifs, apiIndex]);

  // Trigger callback when user nears end of loaded items
  const maybeLoadMore = useInfiniteLoader(updateApiIndex, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: NUM_GIFS_PER_SEARCH,
    threshold: 5,
  });

  interface MoreGifsAvailable {
    (totalNumGifs: number | undefined, apiIndex: number): boolean;
  }

  const moreGifsAvailable: MoreGifsAvailable = (totalNumGifs, apiIndex) => {
    const maxApiLimit = 4999;
    if (totalNumGifs) {
      if (apiIndex < Math.min(totalNumGifs, maxApiLimit)) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={classes.gifGridRoot}>
      <div className={classes.masonic}>
        <Masonry
          onRender={maybeLoadMore}
          key={query}
          items={gifs}
          columnGutter={8}
          columnWidth={250}
          overscanBy={2}
          render={GifLoader}
        />
      </div>
      <GifStatus />
    </div>
  );
};

export default GifGrid;
