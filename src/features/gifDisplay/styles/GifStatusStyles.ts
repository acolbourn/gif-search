import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      justifyContent: 'center',
      alignItems: 'center',
    },
    message: {
      padding: theme.spacing(1),
    },
  })
);

export default useStyles;
