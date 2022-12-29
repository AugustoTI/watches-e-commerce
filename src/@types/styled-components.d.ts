import 'styled-components'
import { light } from 'src/styles/themes/light'

type MyTheme = typeof light

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}
