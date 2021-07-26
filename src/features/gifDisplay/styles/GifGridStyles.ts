import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gifGridRoot: {
      minHeight: '100vh',
      width: '100%',
    },
    masonic: {
      padding: 8,
      width: '100%',
    },
  })
);

export default useStyles;
