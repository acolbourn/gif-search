import React from 'react';
import { useImage } from 'react-image';
import { useHistory } from 'react-router-dom';
import { Gif } from '../../types/GifApiResponse';
import { saveScrollPosition } from '../search/searchSlice';
import { useAppDispatch } from '../../app/hooks';
import GifButtons from './GifButtons';
import useStyles from './styles/GifDisplayStyles';

interface GifDisplayProps {
  gif: Gif;
}

const GifDisplay: React.FC<GifDisplayProps> = ({ gif }) => {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useAppDispatch();

  const { src } = useImage({
    srcList: gif.images.fixed_width.url,
  });

  const handleClick = () => {
    dispatch(saveScrollPosition(window.scrollY));
    history.push(`/gifs/${gif.id}`);
  };

  return (
    <div className={classes.gifDisplayRoot}>
      <img
        src={src}
        alt={gif.title}
        className={classes.gif}
        onClick={handleClick}
      />
      <div className={classes.buttons}>
        <GifButtons id={gif.id} />
      </div>
    </div>
  );
};

export default GifDisplay;
