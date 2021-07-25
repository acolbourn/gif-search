import React from 'react';
import { useImage } from 'react-image';
import { Gif } from '../../types/GifApiResponse';
import GifButtons from './GifButtons';
import useStyles from './styles/GifDisplayStyles';

interface GifDisplayProps {
  gif: Gif;
}

const GifDisplay: React.FC<GifDisplayProps> = ({ gif }) => {
  const classes = useStyles();

  const { src } = useImage({
    srcList: gif.images.fixed_width.url,
  });

  return (
    <div className={classes.gifDisplayRoot}>
      <img src={src} alt={gif.title} className={classes.gif} />
      <div className={classes.buttons}>
        <GifButtons id={gif.id} />
      </div>
    </div>
  );
};

export default GifDisplay;
