import styled, { css } from 'styled-components'
import { maxQuery, minQuery } from '~/styles/query'

export const Container = styled.div`
  ${() => css`
    ${minQuery(
      767,
      css`
        padding: 0 0 4.8rem 9.6rem;
      `,
    )}

    ${minQuery(
      992,
      css`
        padding: 0 0 12.8rem 9.6rem;
      `,
    )}
  `}
`

export const Title = styled.h1`
  ${({ theme: { font, spacings } }) => css`
    font-size: ${font.sizes.mobile.biggestFontSize};
    font-weight: 700;
    margin-bottom: ${spacings['1.6']};

    ${maxQuery(
      320,
      css`
        font-size: ${font.sizes.mobile.h1FontSize};
      `,
    )}

    ${minQuery(
      968,
      css`
        font-size: ${font.sizes.desktop.biggestFontSize};
      `,
    )}
  `}
`

export const Description = styled.p`
  ${({ theme: { spacings } }) => css`
    margin-bottom: ${spacings['2.4']};
  `}
`

export const Price = styled.span`
  ${({ theme: { colors, font, spacings } }) => css`
    display: inline-block;
    font-size: ${font.sizes.mobile.h2FontSize};
    font-weight: 500;
    color: ${colors.firstColor};
    margin-bottom: ${spacings['4.8']};

    ${minQuery(
      968,
      css`
        font-size: ${font.sizes.desktop.h2FontSize};
      `,
    )}
  `}
`

export const Button = styled.button`
  ${({ theme: { font } }) => css`
    box-shadow: 0 12px 24px hsla(0, 0%, 10%, 0.2);

    ${maxQuery(
      320,
      css`
        font-size: ${font.sizes.mobile.smallerFontSize};
      `,
    )}
  `}
`

export const ContainerButtons = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`
