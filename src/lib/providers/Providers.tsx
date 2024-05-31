'use client';

import { store } from '@/redux/store';
import { theme } from '@/theme/theme';
import { ThemeProvider } from '@material-tailwind/react';
import { Provider } from 'react-redux';

const ThemeProviders = ({ children }: { children: any }) => {
  return (
    <ThemeProvider value={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default ThemeProviders;
