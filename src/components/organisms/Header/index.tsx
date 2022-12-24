import { BsWatch } from 'react-icons/bs'
import { BiGridAlt, BiX, BiShoppingBag } from 'react-icons/bi'
import * as S from './styles'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.NavBar className="container">
        <S.NavLogo href={'/'}>
          <BsWatch /> Rolex
        </S.NavLogo>

        <S.NavMenu isOpen={isOpen}>
          <S.NavList>
            <S.NavItem>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </S.NavItem>
            <S.NavItem>
              <a href="#featured" onClick={() => setIsOpen(false)}>
                Featured
              </a>
            </S.NavItem>
            <S.NavItem>
              <a href="#products" onClick={() => setIsOpen(false)}>
                Products
              </a>
            </S.NavItem>
            <S.NavItem>
              <a href="#new" onClick={() => setIsOpen(false)}>
                New
              </a>
            </S.NavItem>
          </S.NavList>
          <S.NavButtonClose onClick={() => setIsOpen(false)}>
            <BiX />
          </S.NavButtonClose>
        </S.NavMenu>

        <S.NavButtons>
          <S.NavShopIconContainer>
            <BiShoppingBag />
          </S.NavShopIconContainer>
          <S.NavToggleIconContainer onClick={() => setIsOpen(true)}>
            <BiGridAlt />
          </S.NavToggleIconContainer>
        </S.NavButtons>
      </S.NavBar>
    </S.Container>
  )
}
