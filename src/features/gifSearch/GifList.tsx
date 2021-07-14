import React from 'react';
import { useGetGifsByNameQuery } from './gifSearchService';

const GifList: React.FC = () => {
  const { data, error, isLoading } = useGetGifsByNameQuery({
    q: 'cat',
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
