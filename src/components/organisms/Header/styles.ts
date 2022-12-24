import Link from 'next/link'
import styled, { css } from 'styled-components'
import { maxQuery } from '~/styles/query'

interface NavMenuProps {
  isOpen: boolean
}

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

export const NavLogo = styled(Link)`
  ${() => css`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      font-size: 2rem;
    }
  `}
`

export const NavMenu = styled.div<NavMenuProps>`
  ${({ theme: { colors }, isOpen }) => css`
    ${maxQuery(
      767,
      css`
        position: fixed;
        background: ${colors.bodyColor};
        top: 0;
        right: ${isOpen ? '0' : '-100%'};
        width: 100%;
        height: 100%;
        padding: 9.6rem 3.2rem 5.6rem;
        transition: 0.3s;
      `,
    )}
  `}
`

export const NavList = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3.2rem;
  `}
`

export const NavItem = styled.li`
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
    }
  `}
`

export const NavButtonClose = styled.button`
  ${() => css`
    font-size: 3.2rem;
    position: absolute;
    top: 1.44rem;
    right: 2rem;
    display: inline-flex;
    background: transparent;
  `}
`

export const NavButtons = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    column-gap: 1.6rem;

    ${NavToggleIconContainer}, ${NavShopIconContainer} {
      font-size: 2rem;
      cursor: pointer;
    }
  `}
`

export const NavShopIconContainer = styled.div`
  ${() => css``}
`

export const NavToggleIconContainer = styled.div`
  ${() => css``}
`
