import { Colors } from '@/app/theme/colors/colors';

export const darkColors = {
  mode: 'dark',

  primary: {
    main: Colors.primary.light,
    light: '#a78bfa',
    dark: Colors.primary.main,
    contrastText: Colors.common.black,
  },

  secondary: {
    main: '#9c4dff',
    contrastText: Colors.common.black,
  },

  success: Colors.success,
  error: Colors.error,
  warning: Colors.warning,
  info: Colors.info,

  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },

  text: {
    primary: Colors.common.white,
    secondary: 'rgba(255,255,255,0.7)',
  },
} as const;
