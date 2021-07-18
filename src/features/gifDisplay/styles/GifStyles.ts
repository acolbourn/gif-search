import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      verticalAlign: 'middle',
      width: '100%',
      marginBottom: `${theme.grid.spacing}px`,
      borderRadius: `${theme.grid.borderRadius}px`,
    },
    gif: {
      verticalAlign: 'middle',
      width: '100%',
      borderRadius: `${theme.grid.borderRadius}px`,
    },
  })
);

export default useStyles;
