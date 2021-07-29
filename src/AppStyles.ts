import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appRoot: {
      width: '100%',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'min-content 1fr',
      gridTemplateAreas: `
        'navbarArea'
        'pageArea'
      `,
    },
    navbarArea: {
      gridArea: 'navbarArea',
    },
    pageArea: {
      gridArea: 'pageArea',
    },
  })
);

export default useStyles;
