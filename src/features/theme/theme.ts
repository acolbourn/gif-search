// 'unstable_createMuiStrictModeTheme' is imported instead of 'createTheme' to fix 'findDOMNode is deprecated in StrictMode' error.  This will be fixed in Material-UI v.5 which is still beta
import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    grid: {
      spacing: number;
      borderRadius: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    grid?: {
      spacing?: number;
      borderRadius?: number;
    };
  }
}

const generateTheme = (useDarkTheme: boolean) => {
  return createTheme({
    palette: {
      type: useDarkTheme ? 'dark' : 'light',
    },
    grid: {
      spacing: 8,
      borderRadius: 4,
    },
    overrides: {
      MuiTypography: {
        h1: {
          fontSize: '1.2rem',
        },
      },
    },
  });
};

export default generateTheme;
