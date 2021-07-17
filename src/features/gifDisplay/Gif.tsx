import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifRoot: {
      marginBottom: '8px',
      verticalAlign: 'middle',
      width: '100%',
      borderRadius: '4px',
    },
  })
);

interface GifProps {
  imageSrc: string;
  alt: string;
}

const GifLoader: React.FC<GifProps> = ({ imageSrc, alt }) => {
  const classes = useStyles();

  const { src } = useImage({
    srcList: imageSrc,
  });

  return <img src={src} alt={alt} className={classes.gifRoot} />;
};

const Gif: React.FC<GifProps> = ({ imageSrc, alt }) => {
  return (
    <Suspense fallback={<Skeleton variant='rect' width={210} height={118} />}>
      <GifLoader imageSrc={imageSrc} alt={alt} />
    </Suspense>
  );
};

export default Gif;
