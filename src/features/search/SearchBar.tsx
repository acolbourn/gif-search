import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useAppDispatch } from '../../app/hooks';
import { configNewQuery, fetchGifs, GifSearchParams } from './searchSlice';
import useStyles from './styles/SearchBarStyles';

export const NUM_GIFS_PER_SEARCH = 20;

const SearchBar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.scrollTo(0, 0);

    const searchParams: GifSearchParams = {
      query,
      limit: NUM_GIFS_PER_SEARCH,
      offset: 0,
    };
    dispatch(configNewQuery(query));
    dispatch(fetchGifs(searchParams));
    setQuery('');
  };

  return (
    <Paper
      component='form'
      className={classes.searchBarRoot}
      elevation={0}
      onSubmit={handleSubmit}
    >
      <InputBase
        className={classes.input}
        placeholder='Search Gifs'
        inputProps={{ 'aria-label': 'search field' }}
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
