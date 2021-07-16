import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifRoot: {
      marginTop: '8px',
      verticalAlign: 'middle',
      width: '100%',
      borderRadius: '4px',
    },
  })
);

interface GifProps {
  src: string;
  alt: string;
}

const Gif: React.FC<GifProps> = ({ src, alt }) => {
  const classes = useStyles();
  return <img src={src} alt={alt} className={classes.gifRoot} />;
};

export default Gif;
