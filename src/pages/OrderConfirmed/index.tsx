import { OrderConfirmedContainer, OrderInformationDelivery , ContainerIcon, ImageContainer, OrderParent} from "./styles";
import {MapPin, Timer, CurrencyDollar}  from 'phosphor-react';
import {useTheme} from 'styled-components';
import imgDelivery from '../../assets/delivery.png';

export function OrderConfirmed() {
  const theme  = useTheme();
  return(
    <OrderParent>
    <OrderConfirmedContainer>
      <div className="titleOrdered">
        <span className="orderConfirmed">Uhu! Pedido confirmado</span>
        <span className="subTitleOrdered">Agora é só aguardar que logo o café chegará até você</span>
      </div>

      <OrderInformationDelivery>
        <div>
          <ContainerIcon backgound={theme['purple-200']}>
            <MapPin />
          </ContainerIcon>
          <div className="container">
            <span>Entrega em Rua João Daniel Martinelli, 102</span>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>
        </div>

        <div>
          <ContainerIcon backgound={theme['yellow-200']}>
            <Timer/>
          </ContainerIcon>
          <div className="container">
            <span>Previsão de entrega</span>
            <span>20 min - 30 min </span>
          </div>
        </div>

        <div>
          <ContainerIcon backgound={theme['yellow-300']}>
            <CurrencyDollar/>
          </ContainerIcon>
          <div className="container">
            <span>Pagaamento na entrega</span>
            <span>Cartão de Crédito</span>
          </div>
        </div>
      </OrderInformationDelivery>
    </OrderConfirmedContainer>
    <ImageContainer src={imgDelivery}></ImageContainer>
    </OrderParent>
  )
}