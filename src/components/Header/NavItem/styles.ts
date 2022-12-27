import styled, { css } from 'styled-components'
import { minQuery } from '~/styles/query'

export const Container = styled.li`
  ${({ theme: { colors, font } }) => css`
    a {
      color: ${colors.titleColor};
      font-weight: 500;
      text-transform: uppercase;
      font-size: ${font.sizes.mobile.h2FontSize};
      transition: 0.3s;

      &:hover {
        color: ${colors.firstColor};
      }

      ${minQuery(
        768,
        css`
          text-transform: initial;
          font-size: ${font.sizes.mobile.normalFontSize};
        `,
      )}

      ${minQuery(
        968,
        css`
          font-size: ${font.sizes.desktop.normalFontSize};
        `,
      )}
    }
  `}
`
