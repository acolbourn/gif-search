import FavoriteButton from '../favorites/FavoriteButton';
import useStyles from './styles/GifButtonStyles';

interface Props {
  id: string;
}

const GifButtons: React.FC<Props> = ({ id }) => {
  const classes = useStyles();

  return (
    <div className={classes.gifButtonRoot}>
      <FavoriteButton id={id} />
    </div>
  );
};

export default GifButtons;
