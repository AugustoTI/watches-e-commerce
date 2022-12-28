import { useHeaderMenu } from '~/stores/useHeaderMenu'
import { NavItem } from '../NavItem'
import * as S from './styles'

export const NavList = () => {
  const handleClickMenu = useHeaderMenu(store => store.handleClickMenu)

  return (
    <S.Container>
      <NavItem
        href="#home"
        text="Home"
        onClick={() => handleClickMenu(false)}
      />
      <NavItem
        href="#featured"
        text="Featured"
        onClick={() => handleClickMenu(false)}
      />
      <NavItem
        href="#products"
        text="Products"
        onClick={() => handleClickMenu(false)}
      />
      <NavItem href="#new" text="New" onClick={() => handleClickMenu(false)} />
    </S.Container>
  )
}
