import * as S from './styles'
import { NavLogo } from './NavLogo'
import { NavMenu } from './NavMenu'
import { NavButtons } from './NavButtons'

export const Header = () => {
  return (
    <S.Container>
      <S.NavBar className="container">
        <NavLogo />

        <NavMenu />

        <NavButtons />
      </S.NavBar>
    </S.Container>
  )
}
