import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { AppThemeProvider } from './app/context/ThemeModeContext.tsx';
createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
