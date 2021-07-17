import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      padding: '2px 0',
    },
    searchBar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    themeButton: {
      position: 'absolute',
      right: '8px',
      [theme.breakpoints.down('xs')]: {
        position: 'relative',
        right: 0,
      },
    },
    offset: {
      height: '68px',
      [theme.breakpoints.down('xs')]: {
        height: '60px',
      },
    },
  })
);

export default useStyles;
