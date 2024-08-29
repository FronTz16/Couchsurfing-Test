'use client';

import React, { FC, ReactNode } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import createTheme from '@/theme';

interface ApplicationProvidersProps {
  children: ReactNode;
}

const MuiThemeProviderWrapper: FC<ApplicationProvidersProps> = ({
  children,
}) => {
  return <MuiThemeProvider theme={createTheme()}>{children}</MuiThemeProvider>;
};

const ApplicationProviders: FC<ApplicationProvidersProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProviderWrapper>
        {/* Add more providers here like:
            Auth, Toast, Alert,ReactQuery, etc...*/}
        {children}
      </MuiThemeProviderWrapper>
    </AppRouterCacheProvider>
  );
};

export default ApplicationProviders;
