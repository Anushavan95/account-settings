import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

import { createAppTheme } from '@/app/theme/createAppTheme';

export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeModeType = (typeof THEME_MODE)[keyof typeof THEME_MODE];

export type ThemeModeContextValue = {
  mode: ThemeModeType;
  setMode: (mode: ThemeModeType) => void;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeModeType>(THEME_MODE.LIGHT);
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleMode = useCallback(() => {
    setMode((current) => (current === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT));
  }, []);

  const value = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      setMode,
      toggleMode,
    }),
    [mode, toggleMode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode(): ThemeModeContextValue {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within AppThemeProvider');
  }
  return context;
}
