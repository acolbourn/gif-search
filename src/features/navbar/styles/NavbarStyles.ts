import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      padding: '2px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '8px',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    searchBar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    themeButton: {
      marginRight: '8px',
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
      },
    },
    offset: {
      height: '64px',
      [theme.breakpoints.down('xs')]: {
        height: '56px',
      },
    },
  })
);

export default useStyles;
