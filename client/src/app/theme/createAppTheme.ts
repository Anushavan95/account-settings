import {createTheme} from '@mui/material/styles';

import {darkColors} from '@/app/theme/dark/dark';
import {lightColors} from '@/app/theme/ligth/ligth';
import {THEME_MODE, type ThemeModeType} from '@/app/context/ThemeModeContext';

export function createAppTheme(mode: ThemeModeType) {
  const colors = mode === THEME_MODE.LIGHT ? lightColors : darkColors;
  return createTheme({
    palette: {
      mode,
      primary: {...colors.primary},
      secondary: {...colors.secondary},
      background: {...colors.background},
      text: {...colors.text}
    }
  });
}
