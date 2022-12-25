import * as S from './styles'

export const MainData = () => {
  return (
    <S.Container>
      <S.Title>
        NEW WATCH <br /> COLLECTIONS B720
      </S.Title>
      <S.Description>
        Latest arrival of the new imported watches of the B720 series, with a
        modern and resistant design.
      </S.Description>
      <S.Price>$1245</S.Price>

      <S.ContainerButtons className="home_buttons">
        <a href="#" className="button button-gray button-small">
          Discover
        </a>
        <S.Button className="button home_button">ADD TO CART</S.Button>
      </S.ContainerButtons>
    </S.Container>
  )
}
