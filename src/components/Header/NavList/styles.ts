import styled, { css } from 'styled-components'
import { minQuery } from '~/styles/query'

export const Container = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3.2rem;

    ${minQuery(
      768,
      css`
        flex-direction: row;
        column-gap: 4rem;
      `,
    )}
  `}
`
