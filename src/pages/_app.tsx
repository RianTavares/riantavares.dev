import type { AppProps } from 'next/app'
import '@/styles/globals.scss';
import { ThemeProvider } from '@/context/ThemeContext';
import { LocaleProvider } from '@/context/LocaleContext';
import { SplineLoadProvider } from '@/context/SplineLoadContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <SplineLoadProvider>
          <Component {...pageProps} />
        </SplineLoadProvider>
      </LocaleProvider>
    </ThemeProvider>
    )
}
