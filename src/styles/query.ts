import { css, FlattenSimpleInterpolation } from 'styled-components'

export const minQuery = (
  mediaQuery: number,
  styles: FlattenSimpleInterpolation,
) => {
  return css`
    @media screen and (min-width: ${mediaQuery}px) {
      ${styles}
    }
  `
}

export const maxQuery = (
  mediaQuery: number,
  styles: FlattenSimpleInterpolation,
) => {
  return css`
    @media screen and (max-width: ${mediaQuery}px) {
      ${styles}
    }
  `
}
