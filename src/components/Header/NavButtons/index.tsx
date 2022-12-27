import { BiGridAlt, BiShoppingBag } from 'react-icons/bi'
import { useHeaderMenu } from '~/stores/useHeaderMenu'
import * as S from './styles'

export const NavButtons = () => {
  const handleClickMenu = useHeaderMenu(store => store.handleClickMenu)

  return (
    <S.Container>
      <S.NavShopIconContainer
        aria-label="Open shopping cart"
        title="Open shopping cart"
      >
        <BiShoppingBag />
      </S.NavShopIconContainer>
      <S.NavToggleIconContainer
        aria-label="Open menu mobile"
        title="Open menu mobile"
        onClick={() => handleClickMenu(true)}
      >
        <BiGridAlt />
      </S.NavToggleIconContainer>
    </S.Container>
  )
}
