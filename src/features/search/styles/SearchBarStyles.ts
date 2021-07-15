import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBarRoot: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      borderRadius: '24px',
      border: `1px solid ${theme.palette.primary.light}`,
      backgroundColor: theme.palette.type === 'light' ? '#f1f3f4' : '',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

export default useStyles;
