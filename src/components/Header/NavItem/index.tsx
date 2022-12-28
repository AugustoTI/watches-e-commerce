import { AnchorHTMLAttributes } from 'react'
import * as S from './styles'

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export const NavItem = ({ text, ...rest }: NavItemProps) => {
  return (
    <S.Container>
      <a {...rest}>{text}</a>
    </S.Container>
  )
}
