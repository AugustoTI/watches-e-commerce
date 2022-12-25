import styled, { css } from 'styled-components'
import { Container as NavLogo } from './NavLogo/styles'
import {
  NavShopIconContainer,
  NavToggleIconContainer,
} from './NavButtons/styles'
import { NavButtonClose } from './NavMenu/styles'

export const Container = styled.header`
  ${({ theme: { zIndex } }) => css`
    width: 100%;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${zIndex.fixed};
  `}
`

export const NavBar = styled.div`
  ${({ theme: { spacings, colors } }) => css`
    height: ${spacings.headerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${NavLogo},
    ${NavToggleIconContainer},
    ${NavButtonClose},
    ${NavShopIconContainer} {
      color: ${colors.titleColor};
    }
  `}
`
