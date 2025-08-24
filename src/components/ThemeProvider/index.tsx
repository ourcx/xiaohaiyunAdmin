// components/ThemeProvider.tsx
'use client';

import { ConfigProvider, theme as antdTheme } from 'antd';
import customTheme from '../../../config/theme';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider theme={customTheme}>
      {children}
    </ConfigProvider>
  );
}