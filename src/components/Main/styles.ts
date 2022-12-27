import styled, { css } from 'styled-components'
import { maxQuery, minQuery } from '~/styles/query'

export const Container = styled.div`
  ${() => css`
    position: relative;
    row-gap: 4rem;

    ${minQuery(
      767,
      css`
        padding-top: 9.6rem;
        grid-template-columns: 1fr max-content;
        align-items: center;
      `,
    )}

    ${minQuery(
      992,
      css`
        column-gap: 3.2rem;
      `,
    )}
  `}
`

export const ImageHomeBG = styled.div`
  ${({ theme: { colors } }) => css`
    .image_home {
      max-width: 100%;
      width: 24rem;
      height: auto;
      display: block;

      ${minQuery(
        992,
        css`
          width: 42rem;
        `,
      )}
    }

    background-color: ${colors.firstColor};
    width: 25.8rem;
    height: 43rem;
    padding-bottom: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-self: flex-end;
    transform: translateX(2.4rem);

    ${maxQuery(
      320,
      css`
        width: 22rem;
      `,
    )}

    ${minQuery(
      576,
      css`
        width: 34rem;
      `,
    )}

    ${minQuery(
      767,
      css`
        order: 1;
        transform: translate(2.4rem, -9.6rem);
      `,
    )}

    ${minQuery(
      992,
      css`
        width: 48rem;
        height: 68rem;
      `,
    )}
  `}
`
