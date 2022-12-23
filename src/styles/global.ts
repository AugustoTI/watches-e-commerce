import { css, Theme } from '@emotion/react'

export const globalStyle = ({ colors, font, spacings }: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
