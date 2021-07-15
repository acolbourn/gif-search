import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    colors: {
      background: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      background?: string;
    };
  }
}

const generateTheme = (useDarkTheme: boolean) => {
  return createTheme({
    palette: {
      type: useDarkTheme ? 'dark' : 'light',
    },
    colors: {
      background: 'black',
    },
  });
};

export default generateTheme;
