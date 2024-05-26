import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import ThemeProviders from '@/lib/providers/Providers';
import './globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RECOVER-EASE',
  description: 'Lost and found network',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProviders>
      <html lang="en">
        <body className={firaCode.className}>{children}</body>
      </html>
    </ThemeProviders>
  );
}
