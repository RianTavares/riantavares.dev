import '@/styles/globals_old.css'
import '../styles/scss/_vars.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/context/ThemeContext';
import { LocaleProvider } from '@/context/LocaleContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Component {...pageProps} />
      </LocaleProvider>
    </ThemeProvider>
    )
}
