import styled, { css } from 'styled-components'
import { minQuery } from '~/styles/query'

export const Container = styled.div`
  ${() => css``}
`

export const Title = styled.h1`
  ${({ theme: { font, spacings } }) => css`
    font-weight: 700;
    font-size: ${font.sizes.mobile.biggestFontSize};
    margin-bottom: ${spacings['1.6']};

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
  ${() => css`
    box-shadow: 0 12px 24px hsla(0, 0%, 10%, 0.2);
  `}
`
