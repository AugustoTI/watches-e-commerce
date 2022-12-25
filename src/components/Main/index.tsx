import Image from 'next/image'
import { MainData } from './MainData'
import { MainSocial } from './MainSocial'
import * as S from './styles'

export const Main = () => {
  return (
    <S.Container id="home">
      <S.Content className="container grid">
        <S.ImageHomeBG>
          <Image
            src="/home.webp"
            alt="Photo of a watch"
            width={768}
            height={1024}
            priority
            className="image_home"
          />
        </S.ImageHomeBG>

        <MainSocial />

        <MainData />
      </S.Content>
    </S.Container>
  )
}
