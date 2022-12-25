import styled, { css } from 'styled-components'
import { minQuery } from '~/styles/query'

export const Container = styled.div`
  ${({ theme: { colors, font } }) => css`
    position: absolute;
    top: 35%;
    left: -8rem;
    transform: rotate(-90deg);
    display: flex;
    column-gap: 1.6rem;

    a {
      font-size: ${font.sizes.mobile.smallerFontSize};
      color: ${colors.textColorLight};
      transition: 0.3s;

      &:hover {
        color: ${colors.titleColor};
      }
    }

    ${minQuery(
      968,
      css`
        a {
          font-size: ${font.sizes.desktop.smallerFontSize};
        }
      `,
    )}
  `}
`
