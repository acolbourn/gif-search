import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifListRoot: {
      width: '100%',
      padding: '8px',
    },
    masonryGrid: {
      display: 'flex',
      marginLeft: '-8px' /* gutter size offset */,
      width: 'auto',
    },
    masonryColumn: {
      paddingLeft: '8px' /* gutter size */,
      backgroundClip: 'padding-box',
    },
  })
);

export default useStyles;
