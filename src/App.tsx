import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import SearchBar from './features/gifSearch/SearchBar';
import GifList from './features/gifSearch/GifList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <SearchBar />
          <GifList />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
