import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifListRoot: {
      width: '100%',
      padding: `${theme.grid.spacing}px`,
    },
    masonryGrid: {
      display: 'flex',
      marginLeft: `-${theme.grid.spacing}px` /* gutter size offset */,
      width: 'auto',
    },
    masonryColumn: {
      paddingLeft: `${theme.grid.spacing}px` /* gutter size */,
      backgroundClip: 'padding-box',
    },
  })
);

export default useStyles;
