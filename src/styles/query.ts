import { css, SerializedStyles } from '@emotion/react'

export const minQuery = (mediaQuery: string, styles: SerializedStyles) => {
  return css`
    @media (min-width: ${mediaQuery}) {
      ${styles}
    }
  `
}

export const maxQuery = (mediaQuery: string, styles: SerializedStyles) => {
  return css`
    @media (max-width: ${mediaQuery}) {
      ${styles}
    }
  `
}
