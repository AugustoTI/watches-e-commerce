import { BiX, BiGridAlt, BiShoppingBag } from 'react-icons/bi'
import { BsWatch } from 'react-icons/bs'
import * as S from './styles'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.NavBar className="container">
        <S.NavLogo href={'/'}>
          <BsWatch />
          Rolex
        </S.NavLogo>
        <S.NavMenu isOpen={isOpen}>
          <S.NavList>
            <S.NavItem onClick={() => setIsOpen(false)}>
              <a href="#home">Home</a>
            </S.NavItem>
            <S.NavItem onClick={() => setIsOpen(false)}>
              <a href="#featured">Featured</a>
            </S.NavItem>
            <S.NavItem onClick={() => setIsOpen(false)}>
              <a href="#products">Products</a>
            </S.NavItem>
            <S.NavItem onClick={() => setIsOpen(false)}>
              <a href="#new">New</a>
            </S.NavItem>
          </S.NavList>
          <button aria-label="Close Menu" onClick={() => setIsOpen(false)}>
            <BiX />
          </button>
        </S.NavMenu>
        <S.NavButtons>
          <button aria-label="View Card">
            <BiShoppingBag />
          </button>
          <button aria-label="Open Menu" onClick={() => setIsOpen(true)}>
            <BiGridAlt />
          </button>
        </S.NavButtons>
      </S.NavBar>
    </S.Container>
  )
}
