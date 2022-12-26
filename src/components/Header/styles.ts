import Link from 'next/link'
import styled, { css } from 'styled-components'
import { maxQuery, minQuery } from '~/styles/query'

interface NavMenuStyleProps {
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

export const NavBar = styled.nav`
  ${({ theme: { spacings } }) => css`
    height: ${spacings.headerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const NavLogo = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.titleColor};
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 2rem;
  }
`

export const NavMenu = styled.div<NavMenuStyleProps>`
  ${({ theme: { colors }, isOpen }) => css`
    button {
      font-size: 3.2rem;
      position: absolute;
      top: 1.44rem;
      right: 2rem;
      display: inline-flex;
      background: transparent;
    }

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

      ${minQuery(
        968,
        css`
          font-size: ${font.sizes.desktop.h2FontSize};
        `,
      )}
    }
  `}
`

export const NavButtons = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    column-gap: 1.6rem;

    button {
      font-size: 2rem;
      display: inline-flex;
      align-items: center;
      background: transparent;
    }
  `}
`
