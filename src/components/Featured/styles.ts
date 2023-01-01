import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css``}
`

export const Content = styled.div`
  ${() => css`
    row-gap: 4rem;
  `}
`

export const FeaturedCard = styled.div`
  ${({ theme: { colors, spacings } }) => css`
    position: relative;
    text-align: center;
    background: ${colors.containerColor};
    padding-top: 3.2rem;
    border: 1px solid ${colors.borderColor};
    overflow-y: hidden;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 12px 32px hsla(0, 0%, 20%, 0.1);
      padding: 3.2rem 0 4.8rem 0;

      ${FeaturedCardButton} {
        opacity: 1;
        transform: translateY(0);
      }

      ${FeaturedCardPrice} {
        margin-bottom: ${spacings['2.4']};
      }
    }
  `}
`

export const FeaturedCardImage = styled.img`
  ${({ theme: { spacings } }) => css`
    height: 214px;
    margin: 0 auto;
    margin-bottom: ${spacings['1.6']};
  `}
`

export const FeaturedCardTag = styled.span`
  ${({ theme: { colors, font } }) => css`
    background: ${colors.firstColor};
    padding: 0.8rem 1.6rem;
    color: #fff;
    text-transform: uppercase;
    font-size: ${font.sizes.mobile.smallFontSize};
    font-weight: 500;
    position: absolute;
    transform: rotate(-90deg);
    left: -1.6rem;
    top: 4.8rem;
  `}
`

export const FeaturedCardData = styled.div`
  ${({ theme: { font } }) => css`
    ${FeaturedCardTitle},
    ${FeaturedCardPrice} {
      font-size: ${font.sizes.mobile.h3FontSize};
      font-weight: 600;
    }
  `}
`

export const FeaturedCardTitle = styled.h3`
  ${({ theme: { spacings } }) => css`
    text-transform: uppercase;
    margin-bottom: ${spacings['1.2']};
  `}
`

export const FeaturedCardPrice = styled.span`
  ${({ theme: { colors } }) => css`
    display: block;
    color: ${colors.firstColor};
    transition: 0.3s;
  `}
`

export const FeaturedCardButton = styled.button`
  ${({ theme: { font } }) => css`
    text-transform: uppercase;
    font-size: ${font.sizes.mobile.smallFontSize};
    transform: translateY(1.6rem);
    opacity: 0;
  `}
`
