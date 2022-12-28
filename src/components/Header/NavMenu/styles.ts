import styled, { css } from 'styled-components'
import { maxQuery } from '~/styles/query'

interface NavMenuProps {
  isOpen: boolean
}

export const Container = styled.div<NavMenuProps>`
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
