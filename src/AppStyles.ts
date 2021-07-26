import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appRoot: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridAutoRows: 'min-content',
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
