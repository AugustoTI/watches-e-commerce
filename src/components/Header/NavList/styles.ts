import styled, { css } from 'styled-components'

export const Container = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3.2rem;
  `}
`
