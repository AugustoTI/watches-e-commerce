import { Roboto } from '@next/font/google'
import { createGlobalStyle, css } from 'styled-components'
import { minQuery } from './query'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const GlobalStyles = createGlobalStyle`
  ${({
    theme: {
      colors,
      spacings,
      font: { sizes },
    },
  }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body,
    button,
    input {
      font-family: ${robotoFont.style.fontFamily};
      font-size: ${sizes.mobile.normalFontSize};
    }

    body {
      background: ${colors.bodyColor};
      color: ${colors.textColor};
      /* For animation dark mode */
      transition: 0.4s;
    }

    img {
      display: block;
      max-width: 100%;
    }

    button {
      cursor: pointer;
      border: none;
      outline: none;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    h1,
    h2,
    h3,
    h4 {
      color: ${colors.titleColor};
      font-weight: 500;
    }

    /*=============== REUSABLE CSS CLASSES ===============*/

    .container {
      max-width: 102.4rem;
      margin-left: ${spacings['2.4']};
      margin-right: ${spacings['2.4']};
    }

    .grid {
      display: grid;
    }

    .main {
      overflow: hidden;
    }

    .section {
      padding: 10.4rem 0 1.6rem;
    }

    .section_title {
      position: relative;
      font-size: ${sizes.mobile.h3FontSize};
      margin-bottom: ${spacings['4.8']};
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;
    }

    .section_title::before {
      content: '';
      position: absolute;
      top: -1.6rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 67px;
      height: 1px;
      background-color: ${colors.firstColor};
    }

    /*=============== RESPONSIVE TYPOGRAPHY ===============*/
    ${minQuery(
      968,
      css`
        body,
        button,
        input {
          font-size: ${sizes.desktop.normalFontSize};
        }

        .section_title {
          font-size: ${sizes.desktop.h3FontSize};
        }
      `,
    )}
  `}
`
