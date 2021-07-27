import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useAppSelector } from '../../app/hooks';
import { selectGifById } from '../search/searchSlice';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import GifButtons from './GifButtons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifDisplayRoot: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gifLayout: {
      width: '50%',
    },
    gif: {
      width: '100%',
    },
  })
);

const GifSinglePage: React.FC = () => {
  const classes = useStyles();
  let { id } = useParams<{ id: string }>();
  const gif = useAppSelector((state) => selectGifById(state, id));

  let content: JSX.Element;
  if (gif) {
    content = (
      <div className={classes.gifLayout}>
        <Typography variant='h1' gutterBottom>
          {gif.title}
        </Typography>
        <img
          src={gif?.images.original.url}
          alt={gif?.title}
          className={classes.gif}
        />
        <GifButtons id={id} />
      </div>
    );
  } else {
    content = <div>Loading...</div>;
  }

  return <div className={classes.gifDisplayRoot}>{content}</div>;
};

export default GifSinglePage;
