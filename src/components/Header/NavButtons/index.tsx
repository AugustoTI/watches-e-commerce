import { BiGridAlt, BiShoppingBag, BiMoon, BiSun } from 'react-icons/bi'
import { useHeaderMenu } from '~/stores/useHeaderMenu'
import { useSwitchTheme } from '~/stores/useSwitchTheme'
import * as S from './styles'

export const NavButtons = () => {
  const handleClickMenu = useHeaderMenu(store => store.handleClickMenu)
  const handleChangeTheme = useSwitchTheme(store => store.changeTheme)
  const themeSelected = useSwitchTheme(store => store.themeSelected)

  return (
    <S.Container>
      {themeSelected === 'light' ? (
        <BiMoon onClick={() => handleChangeTheme('dark')} />
      ) : (
        <BiSun onClick={() => handleChangeTheme('light')} />
      )}
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
