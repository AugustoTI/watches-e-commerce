import { BiX } from 'react-icons/bi'
import { useHeaderMenu } from '~/stores/headerMenu'
import { NavList } from '../NavList'
import * as S from './styles'

export const NavMenu = () => {
  const isOpen = useHeaderMenu(store => store.isOpen)
  const handleClickMenu = useHeaderMenu(store => store.handleClickMenu)

  return (
    <S.Container isOpen={isOpen}>
      <NavList />
      <S.NavButtonClose
        aria-label="Close Menu"
        onClick={() => handleClickMenu(false)}
      >
        <BiX />
      </S.NavButtonClose>
    </S.Container>
  )
}
