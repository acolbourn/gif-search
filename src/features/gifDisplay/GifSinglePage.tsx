import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectGifById,
  fetchGifById,
  selectSearchState,
} from '../search/searchSlice';
import SyncLoader from 'react-spinners/SyncLoader';
import GifButtons from './GifButtons';
import useStyles from './styles/GifSinglePageStyles';

const GifSinglePage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  let { id } = useParams<{ id: string }>();
  const gif = useAppSelector((state) => selectGifById(state, id));
  const { status, error } = useAppSelector(selectSearchState);
  const dispatch = useAppDispatch();

  let content: JSX.Element;
  if (gif) {
    content = (
      <div className={classes.gifLayout}>
        <Typography variant='h1' className={classes.title}>
          {gif.title}
        </Typography>
        <div className={classes.gifAndButtons}>
          <img
            src={gif.images.original.url}
            alt={gif.title}
            className={classes.gif}
          />
          <div className={classes.buttons}>
            <GifButtons id={id} />
          </div>
        </div>
      </div>
    );
  } else {
    // If gif not in store, fetch or display error/loading
    content = <SyncLoader color={theme.palette.primary.light} />;
    if (status !== 'loading' && status !== 'error') {
      dispatch(fetchGifById(id));
    } else if (error || status === 'error') {
      content = (
        <Paper>
          <Typography
            className={classes.message}
            variant='body1'
            style={error ? { color: 'red' } : {}}
          >
            {error}
          </Typography>
        </Paper>
      );
    }
  }

  return <div className={classes.gifDisplayRoot}>{content}</div>;
};

export default GifSinglePage;
