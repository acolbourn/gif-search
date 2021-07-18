import React from 'react';
import { useImage } from 'react-image';
import useStyles from './styles/GifStyles';

export interface GifProps {
  imageSrc: string;
  alt: string;
}

const Gif: React.FC<GifProps> = ({ imageSrc, alt }) => {
  const classes = useStyles();

  const { src } = useImage({
    srcList: imageSrc,
  });

  return (
    <div className={classes.root}>
      <img src={src} alt={alt} className={classes.gif} />
    </div>
  );
};

export default Gif;
