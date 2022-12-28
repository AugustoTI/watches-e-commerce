import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Container = styled(Link)`
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
