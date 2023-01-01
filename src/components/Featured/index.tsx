import * as S from './styles'

export const Featured = () => {
  return (
    <section id="featured" className="container section">
      <h2 className="section_title">Featured</h2>

      <S.Content className="grid">
        <S.FeaturedCard>
          <S.FeaturedCardTag>Sale</S.FeaturedCardTag>
          <S.FeaturedCardImage src="/featured1.webp" alt="test" />
          <S.FeaturedCardData>
            <S.FeaturedCardTitle>Jazzmaster</S.FeaturedCardTitle>
            <S.FeaturedCardPrice>$1050</S.FeaturedCardPrice>
          </S.FeaturedCardData>

          <S.FeaturedCardButton className="button">
            Add to cart
          </S.FeaturedCardButton>
        </S.FeaturedCard>

        <S.FeaturedCard>
          <S.FeaturedCardTag>Sale</S.FeaturedCardTag>
          <S.FeaturedCardImage src="/featured1.webp" alt="test" />
          <S.FeaturedCardData>
            <S.FeaturedCardTitle>Ingersoll</S.FeaturedCardTitle>
            <S.FeaturedCardPrice>$250</S.FeaturedCardPrice>
          </S.FeaturedCardData>

          <S.FeaturedCardButton className="button">
            Add to cart
          </S.FeaturedCardButton>
        </S.FeaturedCard>
      </S.Content>
    </section>
  )
}
