import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { toggleTheme } from './themeSlice';
import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

export default function ThemeButton() {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      onClick={() => dispatch(toggleTheme())}
      aria-label='toggle dark theme'
    >
      <InvertColorsIcon />
    </IconButton>
  );
}
