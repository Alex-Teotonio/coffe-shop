import { 
  CheckoutParent,
  CheckoutSubContainerItens,
  CheckoutItensSelected,
  CheckoutContainer,
  CheckoutAdress,
  ContainerAdressHeader,
  ContainerAdressFields,
  ContainerPayment,
  Input,
  InputInline,
  ContainerPaymentHeader,
  PaymentOptions,
  CheckoutImageProducts,
  CheckoutAmountContainer,
  CheckoutAmountItens
} from "./styles";

import americano from '../../assets/imagesList/americano.png';
import {MapPinLine,CurrencyDollar, CreditCard, Bank, Money, Trash} from 'phosphor-react';
import { InputQtdeItensCarrinho } from "../../components/InputQtdeCarrinho";
import { ButtonDisplayedWithIcon } from "../../components/ButtonDisplayedWithIcon";
import { Separator } from "../../components/Separator/styles";

export function Checkout() {
  return (
    <CheckoutParent>
    <CheckoutContainer>
      <span className="titleContainer">Complete seu pedido</span>
      <CheckoutAdress>
        <ContainerAdressHeader>
          <div className="titleLocation">
            <MapPinLine/>
            <p>Endereço de Entrega</p>
          </div>
          <span>Informe o endereço onde deseja receber seu pedido.</span>
        </ContainerAdressHeader>
        <ContainerAdressFields>
          <Input width='200px' placeholder="CEP"></Input>
          <Input width='100%' placeholder="Rua"></Input>
          <InputInline>
            <Input width='200px' placeholder="Número"></Input>
            <Input width="348px" placeholder="Complemento"></Input>
          </InputInline>

          <InputInline>
            <Input width='200px' placeholder="Bairro"></Input>
            <Input width="276px" placeholder="Cidade"></Input>
            <Input width="60px" placeholder="UF"></Input>
          </InputInline>
        </ContainerAdressFields>
      </CheckoutAdress>
      <ContainerPayment>        
        <ContainerPaymentHeader>
          <CurrencyDollar/>
          <div className='flexTitlePayment'>
            <p>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
        </ContainerPaymentHeader>
        <PaymentOptions>
            <button>
              <CreditCard/>
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button>
              <Bank/>
              <p>CARTÃO DE DÉBITO</p>
              </button>
            <button>
              <Money/>
              <p>DINHEIRO</p>
            </button>
        </PaymentOptions>

      </ContainerPayment>
    </CheckoutContainer>

    <CheckoutSubContainerItens>
      <span>Cafés selecionados</span>
      <CheckoutItensSelected>
        <CheckoutImageProducts>
          <img src={americano}></img>
          <div className="coffeSelected">
            <p>Expresso Tradicional</p>
            <div className="actionItensSelected">
              <InputQtdeItensCarrinho marginLeft="0"/>
              <ButtonDisplayedWithIcon width='5.68rem' gap='0.250rem' padding='0 0.5rem'>
                <Trash/>
                <p>REMOVER</p>
              </ButtonDisplayedWithIcon>
            </div>
          </div>
        </CheckoutImageProducts>
        <Separator/>

        <CheckoutImageProducts>
          <img src={americano}></img>
          <div className="coffeSelected">
            <p>Expresso Tradicional</p>
            <div className="actionItensSelected">
              <InputQtdeItensCarrinho marginLeft="0"/>
              <ButtonDisplayedWithIcon width='5.68rem' gap='0.250rem' padding='0 0.5rem'>
                <Trash/>
                <p>REMOVER</p>
              </ButtonDisplayedWithIcon>
            </div>
          </div>
        </CheckoutImageProducts>
        <Separator/>
        <CheckoutAmountContainer>
          <CheckoutAmountItens>
            <span className="labelAmount">Total de itens</span>
            <span>R$ 29,70</span>
          </CheckoutAmountItens>

          <CheckoutAmountItens>
            <span className="labelAmount">Entrega</span>
            <span>R$ 3,70</span>
          </CheckoutAmountItens>

          <CheckoutAmountItens>
            <p className="labelAmountTotal">Total</p>
            <p className="labelAmountTotal">R$ 3,70</p>
          </CheckoutAmountItens>
        </CheckoutAmountContainer>

        <button className="orderConfirm">
          Confirmar Pedido
        </button>
      </CheckoutItensSelected>
    </CheckoutSubContainerItens>
  </CheckoutParent>
  )
}