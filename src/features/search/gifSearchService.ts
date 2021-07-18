import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GifApiResponse } from '../../types/GifApiResponse';

interface GifSearchParams {
  q: string;
  gifsPerPage: number;
  page: number;
}
export const MAX_API_OFFSET = 4999; // Max offset starting position imposed by API

export const gifSearchApi = createApi({
  reducerPath: 'gifSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.giphy.com/v1/gifs/`,
  }),
  endpoints: (builder) => ({
    getGifsByName: builder.query<GifApiResponse, GifSearchParams>({
      query: (arg) => {
        const { q, gifsPerPage, page } = arg;
        return {
          url: 'search',
          params: {
            q,
            limit: gifsPerPage,
            offset: Math.min((page - 1) * gifsPerPage, MAX_API_OFFSET),
            api_key: process.env.REACT_APP_GIPHY_API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetGifsByNameQuery } = gifSearchApi;
