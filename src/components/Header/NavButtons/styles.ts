import styled, { css } from 'styled-components'
import { minQuery } from '~/styles/query'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    column-gap: 1.6rem;

    ${NavToggleIconContainer}, ${NavShopIconContainer}, svg {
      color: ${colors.titleColor};
      font-size: 2rem;
      cursor: pointer;
    }

    ${minQuery(
      768,
      css`
        margin-left: auto;
      `,
    )}
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
