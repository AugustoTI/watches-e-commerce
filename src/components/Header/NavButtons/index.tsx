import { BiGridAlt, BiShoppingBag } from 'react-icons/bi'
import { useHeaderMenu } from '~/stores/useHeaderMenu'
import * as S from './styles'

export const NavButtons = () => {
  const handleClickMenu = useHeaderMenu(store => store.handleClickMenu)

  return (
    <S.Container>
      <S.NavShopIconContainer>
        <BiShoppingBag />
      </S.NavShopIconContainer>
      <S.NavToggleIconContainer onClick={() => handleClickMenu(true)}>
        <BiGridAlt />
      </S.NavToggleIconContainer>
    </S.Container>
  )
}
