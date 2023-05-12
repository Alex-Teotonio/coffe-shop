import {IntroductionContainer, ContentTextIntroduction, ContainerItems, ContainerIcons, ContainerImage} from './styles'
import {ShoppingCart,Package} from 'phosphor-react';
import coffeImage from '../../assets/coffeImage.png'
import {useTheme} from 'styled-components'
export function Introduction() {
  const theme = useTheme();
  return (
    <IntroductionContainer>
      <div>
      <ContentTextIntroduction>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
      </ContentTextIntroduction>

      <ContainerItems>
        <ContainerIcons background={theme['yellow-300']}>
          <div><ShoppingCart fill='white'></ShoppingCart></div>
          <span>Compra simples e segura</span>
        </ContainerIcons>

        <ContainerIcons background={theme['gray-150']}>
          <div><Package/></div>
          <span>Embalagem mantém o café intacto</span>
        </ContainerIcons>

        <ContainerIcons background={theme['yellow-200']}>
          <div><ShoppingCart></ShoppingCart></div>
          <span>Entrega rápida e rastreada</span>
        </ContainerIcons>

        <ContainerIcons background={theme['purple-200']}>
          <div><ShoppingCart></ShoppingCart></div>
          <span>O café chega fresquinho até você</span>
        </ContainerIcons>
      </ContainerItems>
      </div>

      <ContainerImage>
        <img src={coffeImage}></img>
      </ContainerImage>
    </IntroductionContainer>
  )
}