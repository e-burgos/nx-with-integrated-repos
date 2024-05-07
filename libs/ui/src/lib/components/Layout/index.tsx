import React from 'react';
import Frame from '../Frame';
import { ThemeProvider, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export interface LayoutProps {
  children?: React.ReactNode;
  withFrame?: boolean;
}

function Layout({ children, withFrame }: LayoutProps) {
  const theme = createTheme({
    status: {
      danger: '#FF0000',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>{withFrame ? <Frame>{children}</Frame> : children}</div>
    </ThemeProvider>
  );
}

export default Layout;
