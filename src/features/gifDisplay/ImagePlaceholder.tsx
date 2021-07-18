import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
var _styles = require('@material-ui/core/styles');

type StyleProps = {
  defaultHeight: number;
};

const useStyles = makeStyles<Theme, StyleProps>((theme) =>
  createStyles({
    root: {
      display: 'block',
      backgroundColor: _styles.alpha(
        theme.palette.text.primary,
        theme.palette.type === 'light' ? 0.11 : 0.13
      ),
      height: ({ defaultHeight }) => `${defaultHeight}px`,
      marginBottom: `${theme.grid.spacing}px`,
      borderRadius: `${theme.grid.borderRadius}px`,
      animation: '$pulse 1.5s ease-in-out 0.5s infinite',
    },
    '@keyframes pulse': {
      '0%': {
        opacity: 1,
      },
      '50%': {
        opacity: 0.4,
      },
      '100%': {
        opacity: 1,
      },
    },
  })
);

interface ImagePlaceholderProps {
  defaultHeight: number;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  defaultHeight,
}) => {
  const classes = useStyles({ defaultHeight });
  return <div className={classes.root} />;
};

export default ImagePlaceholder;
