import React from 'react';
import { Inter } from 'next/font/google';
import ApplicationProviders from '@/providers/ApplicationProvider';
import type { Viewport } from 'next';
import Container from '@mui/material/Container';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Container maxWidth={false} sx={{ padding: 2, paddingTop: 10 }}>
        <ApplicationProviders>{children}</ApplicationProviders>
      </Container>
    </div>
  );
}
