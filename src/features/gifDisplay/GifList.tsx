import React from 'react';
import { useGetGifsByNameQuery } from '../search/gifSearchService';
import { useAppSelector } from '../../app/hooks';
import { selectSearchParams } from '../search/searchSlice';

const GifList: React.FC = () => {
  const { query } = useAppSelector(selectSearchParams);

  const { data, error, isLoading } = useGetGifsByNameQuery({
    q: query,
    gifsPerPage: 20,
    pageNumber: 1,
  });

  console.log(data);

  return (
    <div>
      {error ? <div>Error</div> : null}
      {isLoading ? <div>Loading...</div> : null}
      {/* {data ? <div>{data}</div> : null} */}
    </div>
  );
};

export default GifList;
