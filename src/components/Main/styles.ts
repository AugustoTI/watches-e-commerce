import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css``}
`

export const Content = styled.div`
  ${() => css`
    position: relative;
    row-gap: 4rem;
  `}
`

export const ImageHomeBG = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.firstColor};
    width: 25.8rem;
    height: 43rem;
    padding-bottom: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-self: flex-end;
    transform: translateX(2.4rem);
  `}
`

export const ImageHome = styled(Image)`
  max-width: 100%;
  width: 24rem;
  height: auto;
  display: block;
`
