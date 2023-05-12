import type { AppProps } from 'next/app'
import '@/styles/globals.scss';
import { ThemeProvider } from '@/context/ThemeContext';
import { LocaleProvider } from '@/context/LocaleContext';
import { MenuControlProvider } from '@/context/MenuControlContext';
import { SplineLoadProvider } from '@/context/SplineLoadContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <SplineLoadProvider>
          <MenuControlProvider>
            <Component {...pageProps} />
          </MenuControlProvider>
        </SplineLoadProvider>
      </LocaleProvider>
    </ThemeProvider>
    )
}
