import * as S from './styles'
import { NavLogo } from './NavLogo'
import { NavMenu } from './NavMenu'
import { NavButtons } from './NavButtons'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [backgroundActive, setBackgroundActive] = useState(false)

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setBackgroundActive(true)
      } else {
        setBackgroundActive(false)
      }
    }

    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <S.Container backgroundActive={backgroundActive}>
      <S.NavBar className="container">
        <NavLogo />

        <NavMenu />

        <NavButtons />
      </S.NavBar>
    </S.Container>
  )
}
