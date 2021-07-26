import { useAppSelector } from '../../app/hooks';
import { selectGifById } from '../search/searchSlice';
import FavoriteButton from '../favorites/FavoriteButton';
import CopyButton from './CopyButton';
import useStyles from './styles/GifButtonStyles';

interface Props {
  id: string;
}

const GifButtons: React.FC<Props> = ({ id }) => {
  const classes = useStyles();
  const gif = useAppSelector((state) => selectGifById(state, id));

  let gifUrl = '';
  if (gif) {
    gifUrl = gif.images.original.url;
  }

  return (
    <div className={classes.gifButtonRoot}>
      <FavoriteButton id={id} />
      <CopyButton text={gifUrl} />
    </div>
  );
};

export default GifButtons;
