import '@emotion/react'
import { theme } from 'src/styles/theme'

type MyTheme = typeof theme

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MyTheme {}
}
