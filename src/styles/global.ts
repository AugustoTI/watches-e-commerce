import { Roboto } from '@next/font/google'
import { createGlobalStyle, css } from 'styled-components'
import { maxQuery, minQuery } from './query'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

interface GlobalStylesProps {
  darkMode: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${({
    darkMode,
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

    img {
      max-width: 100%;
      display: block;
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

    ::-webkit-scrollbar {
      width: 0.96rem;
      background: ${darkMode ? 'hsl(0, 0%, 30%)' : 'hsl(0, 0%, 74%)'};
    }

    ::-webkit-scrollbar-thumb {
      background: hsl(0, 0%, 17%);
    }

    /*=============== REUSABLE CSS CLASSES ===============*/
    .container {
      max-width: 102.4rem;
      margin-left: ${spacings['2.4']};
      margin-right: ${spacings['2.4']};

      ${maxQuery(
        320,
        css`
          margin-left: ${spacings['1.6']};
          margin-right: ${spacings['1.6']};
        `,
      )}

      ${minQuery(
        1024,
        css`
          margin-left: auto;
          margin-right: auto;
        `,
      )};
    }

    .grid {
      display: grid;
    }

    .main {
      overflow: hidden;
    }

    .section {
      padding: 10.4rem 0 1.6rem;

      ${minQuery(
        767,
        css`
          padding: 12.8rem 0 1.6rem;
        `,
      )}
    }

    .section_title {
      position: relative;
      font-size: ${sizes.mobile.h3FontSize};
      margin-bottom: ${spacings['4.8']};
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;

      &:before {
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
    }

    .button {
      display: inline-block;
      padding: 2rem 3.2rem;
      background: ${colors.buttonColor};
      color: #fff;
      font-weight: 500;
      transition: 0.3s;

      &:hover {
        background: ${colors.buttonColorAlt};
      }

      &.button-small {
        padding: 1.6rem 2.4rem;
      }

      &.button-gray {
        background: ${darkMode ? 'hsl(0, 0%, 49%)' : 'hsl(0, 0%, 75%)'};
        color: ${colors.titleColor};

        &:hover {
          background: hsl(0, 0%, 63%);
        }
      }
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
    )};
  `}
`
