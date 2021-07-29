import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import {
  Gif,
  GifApiResponse,
  GifFetchByIdApiResponse,
} from '../../types/GifApiResponse';

export interface SearchState {
  query: string;
  status: 'idle' | 'loading' | 'succeeded' | 'error';
  error: string | undefined;
  totalNumGifs: number | undefined;
  scrollPosition: number;
}

const gifsAdapter = createEntityAdapter<Gif>({
  selectId: (gif) => gif.id,
});

const initialState = gifsAdapter.getInitialState<SearchState>({
  query: '',
  status: 'idle',
  error: undefined,
  totalNumGifs: undefined,
  scrollPosition: 0,
});

export interface GifSearchParams {
  query: string;
  limit?: number;
  offset?: number;
}

export const fetchGifs = createAsyncThunk(
  'search/fetchGifs',
  async (searchParams: GifSearchParams) => {
    const baseURL = `https://api.giphy.com/v1/gifs/search`;
    const params = {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      q: searchParams.query,
      limit: searchParams.limit,
      offset: searchParams.offset,
    };

    const response = await axios.get<GifApiResponse>(baseURL, {
      params: params,
    });
    return response.data;
  }
);

export const fetchGifById = createAsyncThunk(
  'search/fetchGifById',
  async (id: string) => {
    const baseURL = `https://api.giphy.com/v1/gifs/${id}`;
    const params = {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
    };

    const response = await axios.get<GifFetchByIdApiResponse>(baseURL, {
      params: params,
    });
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    configNewQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      gifsAdapter.removeAll(state);
      state.totalNumGifs = 0;
      state.scrollPosition = 0;
    },
    saveScrollPosition: (state, action: PayloadAction<number>) => {
      state.scrollPosition = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGifs.fulfilled, (state, action) => {
      gifsAdapter.upsertMany(state, action.payload.data);
      state.totalNumGifs = action.payload.pagination.total_count;
      state.status = 'succeeded';
      state.error = undefined;
    });
    builder.addCase(fetchGifs.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchGifs.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
    builder.addCase(fetchGifById.fulfilled, (state, action) => {
      gifsAdapter.upsertOne(state, action.payload.data);
      state.status = 'succeeded';
      state.error = undefined;
    });
    builder.addCase(fetchGifById.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchGifById.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  },
});

export const { configNewQuery, saveScrollPosition } = searchSlice.actions;

export const { selectAll: selectAllGifs, selectById: selectGifById } =
  gifsAdapter.getSelectors<RootState>((state) => state.search);

export const selectSearchState = (state: RootState) => state.search;

export default searchSlice.reducer;
