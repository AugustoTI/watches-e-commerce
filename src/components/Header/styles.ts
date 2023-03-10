import styled, { css } from 'styled-components'
import { Container as NavLogo } from './NavLogo/styles'
import {
  NavShopIconContainer,
  NavToggleIconContainer,
} from './NavButtons/styles'
import { NavButtonClose } from './NavMenu/styles'
import { minQuery } from '~/styles/query'

interface HeaderStyleProps {
  backgroundActive: boolean
}

export const Container = styled.header<HeaderStyleProps>`
  ${({ theme: { zIndex, colors }, backgroundActive }) => css`
    width: 100%;
    background: ${backgroundActive ? colors.bodyColor : 'transparent'};
    box-shadow: ${backgroundActive && '0 1px 4px hsla(0,4%,15%,0.1)'};
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${zIndex.fixed};
    transition: 0.2s;
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

    ${minQuery(
      768,
      css`
        height: calc(${spacings.headerHeight} + 2.4rem);
        justify-content: initial;
        column-gap: 4.8rem;

        ${NavToggleIconContainer},
        ${NavButtonClose} {
          display: none;
        }
      `,
    )}
  `}
`
