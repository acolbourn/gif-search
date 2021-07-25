import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifButtonRoot: {
      backgroundColor: '#0000006e',
      borderRadius: theme.grid.borderRadius,
    },
  })
);

export default useStyles;
