import { createTheme } from '@material-ui/core/styles';

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
  });
};

export default generateTheme;
