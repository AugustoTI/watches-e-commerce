import styled, { css } from 'styled-components'

export const Container = styled.div`
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

export const NavShopIconContainer = styled.button`
  ${() => css`
    display: inline-flex;
    align-items: center;
    background: transparent;
  `}
`

export const NavToggleIconContainer = styled(NavShopIconContainer)``
