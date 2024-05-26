'use client';

import { theme } from '@/theme/theme';
import { ThemeProvider } from '@material-tailwind/react';
import { ReactNode } from 'react';

const ThemeProviders = ({ children }: { children: NonNullable<ReactNode> }) => {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
