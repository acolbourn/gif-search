import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifDisplayRoot: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gifLayout: {
      margin: theme.spacing(1),
      maxWidth: '90%',
      maxHeight: '90%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    title: {
      margin: `${theme.spacing(1.2)}px 0`,
    },
    gifAndButtons: {
      position: 'relative',
      display: 'flex',
    },
    gif: {
      width: '100%',
      minWidth: '100px',
      minHeight: '100px',
      borderRadius: theme.grid.borderRadius,
    },
    buttons: {
      height: 'min-content',
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        position: 'absolute',
        top: 4,
        right: 4,
      },
    },
    message: {
      padding: theme.spacing(1),
    },
  })
);

export default useStyles;
