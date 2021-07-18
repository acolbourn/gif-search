import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useAppDispatch } from '../../app/hooks';
import { changePage } from '../search/searchSlice';
import { MAX_API_OFFSET } from '../search/gifSearchService';
import { useAppSelector } from '../../app/hooks';
import { selectSearchParams } from '../search/searchSlice';
import { useGetGifsByNameQuery } from '../search/gifSearchService';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

const PageButtons: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const TEMP_GIFS_PER_PAGE = 20;

  const { query, page } = useAppSelector(selectSearchParams);
  const { data } = useGetGifsByNameQuery({
    q: query,
    gifsPerPage: TEMP_GIFS_PER_PAGE,
    page,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(changePage(page));
  };

  interface PageCount {
    (totalPages: number, gifsPerPage: number): number;
  }

  const getPageCount: PageCount = (totalPages, gifsPerPage) => {
    if (totalPages === 0 || totalPages === undefined) return 1;
    // Ensure api max limit is not exceeded
    const totalLimited = Math.min(totalPages, MAX_API_OFFSET);
    const extraPage = 0 !== totalLimited % gifsPerPage;
    return Math.floor(totalLimited / gifsPerPage) + (extraPage ? 1 : 0);
  };

  let pageCount = 1;
  if (data) {
    pageCount = getPageCount(data.pagination.total_count, TEMP_GIFS_PER_PAGE);
  }

  return (
    <div className={classes.root}>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant='outlined'
          shape='rounded'
        />
      )}
    </div>
  );
};

export default PageButtons;
