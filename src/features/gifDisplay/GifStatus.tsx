import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { useAppSelector } from '../../app/hooks';
import { selectSearchState } from '../search/searchSlice';
import SyncLoader from 'react-spinners/SyncLoader';
import useStyles from './styles/GifStatusStyles';

const GifStatus: React.FC = () => {
  const { query, totalNumGifs, status, error } =
    useAppSelector(selectSearchState);

  const theme = useTheme();
  const classes = useStyles();

  let message = 'End of Results';
  if (status === 'succeeded' && totalNumGifs === 0) {
    message = `No result found for ${query}, please try again.`;
  } else if (error) {
    message = error;
  }

  return (
    <div className={classes.root}>
      {status === 'loading' ? (
        <SyncLoader color={theme.palette.primary.light} />
      ) : (
        status !== 'idle' && (
          <Paper>
            <Typography
              className={classes.message}
              variant='body1'
              style={error ? { color: 'red' } : {}}
            >
              {message}
            </Typography>
          </Paper>
        )
      )}
    </div>
  );
};

export default GifStatus;
