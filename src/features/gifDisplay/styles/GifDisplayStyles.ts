import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifDisplayRoot: {
      verticalAlign: 'middle',
      width: '100%',
      position: 'relative',
      '&:hover': {
        '& $buttons': {
          opacity: 1,
        },
      },
    },
    gif: {
      verticalAlign: 'middle',
      width: '100%',
      borderRadius: `${theme.grid.borderRadius}px`,
      maxHeight: '400px',
      objectFit: 'cover',
      display: 'block',
    },
    buttons: {
      position: 'absolute',
      top: 4,
      right: 4,
      transition: 'opacity 250ms ease-in-out',
      opacity: 0,
    },
  })
);

export default useStyles;
