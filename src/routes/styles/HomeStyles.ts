import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeRoot: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridAutoRows: 'min-content',
      gridTemplateAreas: `
        'navbarArea'        
        'gifArea'        
      `,
    },
    navbarArea: {
      gridArea: 'navbarArea',
    },
    gifArea: {
      gridArea: 'gifArea',
    },
  })
);

export default useStyles;
