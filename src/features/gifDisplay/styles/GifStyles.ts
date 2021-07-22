import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      verticalAlign: 'middle',
      width: '100%',
    },
    gif: {
      verticalAlign: 'middle',
      width: '100%',
      borderRadius: `${theme.grid.borderRadius}px`,
      maxHeight: '400px',
      objectFit: 'cover',
      display: 'block',
    },
  })
);

export default useStyles;
