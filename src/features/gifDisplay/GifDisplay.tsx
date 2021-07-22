import React from 'react';
import { useImage } from 'react-image';
import { Gif } from '../../types/GifApiResponse';
import useStyles from './styles/GifStyles';

interface GifDisplayProps {
  gif: Gif;
}

const GifDisplay: React.FC<GifDisplayProps> = ({ gif }) => {
  const classes = useStyles();

  const { src } = useImage({
    srcList: gif.images.fixed_width.url,
  });

  return (
    <div className={classes.root}>
      <img src={src} alt={gif.title} className={classes.gif} />
    </div>
  );
};

export default GifDisplay;
