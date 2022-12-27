import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useSwitchTheme } from '~/stores/useSwitchTheme'
import { GlobalStyles } from '~/styles/global'
import { dark } from '~/styles/themes/dark'
import { light } from '~/styles/themes/light'

export default function App({ Component, pageProps }: AppProps) {
  const themeSelected = useSwitchTheme(store => store.themeSelected)

  return (
    <ThemeProvider theme={themeSelected === 'dark' ? dark : light}>
      <GlobalStyles darkMode={themeSelected === 'dark'} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
