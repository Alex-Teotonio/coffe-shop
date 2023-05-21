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
import { useContext, ChangeEvent } from "react";
import { Address, CartContext } from "../../context/CartContext";

export function Checkout() {
  const {address,cart, handlePaymentMethods, handleAddress}  = useContext(CartContext);
  const totalValue = cart.reduce((total, item) => {
    if(item.price) {
      const price = parseFloat(item.price.replace(",", "."));
      return total + price * item.qtde;
    } return 0
  }, 0);
  const taxaEntrega = 3.70;
  const totalValueFinal = totalValue+taxaEntrega;

  function handleChangePaymentMethod(method: string) {
    handlePaymentMethods(method);
  }

  function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    handleAddress(name, value);
  }
  

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
          <Input onChange={handleChangeAddress} width="200px" placeholder="CEP" name="cep" value={address.cep} />
          <Input onChange={handleChangeAddress} width="100%" placeholder="Rua" name="street" value={address.street} />
          <InputInline>
            <Input onChange={handleChangeAddress} width="200px" placeholder="Número" name="number" value={address.number} />
            <Input onChange={handleChangeAddress} width="348px" placeholder="Complemento" name="complement" value={address.complement} />
          </InputInline>

          <InputInline>
            <Input onChange={handleChangeAddress} width="200px" placeholder="Bairro" name="neighborhood" value={address.neighborhood} />
            <Input onChange={handleChangeAddress} width="276px" placeholder="Cidade" name="city" value={address.city} />
            <Input onChange={handleChangeAddress} width="60px" placeholder="UF" name="state" value={address.state} />
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
            <button onClick={() => handleChangePaymentMethod('CARTÃO DE CRÉDITO')}>
              <CreditCard/>
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button onClick={() => handleChangePaymentMethod('CARTÃO DE DÉBITO')}>
              <Bank/>
              <p>CARTÃO DE DÉBITO</p>
              </button>
            <button onClick={() => handleChangePaymentMethod('DINHEIRO')}>
              <Money/>
              <p>DINHEIRO</p>
            </button>
        </PaymentOptions>

      </ContainerPayment>
    </CheckoutContainer>

    <CheckoutSubContainerItens>
      <span>Cafés selecionados</span>
      <CheckoutItensSelected>
        {
          cart.map((c) =>  c.id !=0 && (
            
            <>
              <CheckoutImageProducts key={c.id}>
                <img src={americano}></img>
                <div className="coffeSelected">
                  <p>{c.name}</p>
                  <div className="actionItensSelected">
                    <InputQtdeItensCarrinho marginLeft="0" selectedProduct={c.id} qtde={c.qtde}/>
                    <ButtonDisplayedWithIcon width='5.68rem' gap='0.250rem' padding='0 0.5rem'>
                      <Trash/>
                      <p>REMOVER</p>
                    </ButtonDisplayedWithIcon>
                  </div>
                </div>
              </CheckoutImageProducts>
              <Separator/>
            </>
          ))
        }
        <CheckoutAmountContainer>
          <CheckoutAmountItens>
            <span className="labelAmount">Total de itens</span>
            <span>R$ {totalValue.toFixed(2)}</span>
          </CheckoutAmountItens>

          <CheckoutAmountItens>
            <span className="labelAmount">Entrega</span>
            <span>R$ {taxaEntrega.toFixed(2)}</span>
          </CheckoutAmountItens>

          <CheckoutAmountItens>
            <p className="labelAmountTotal">Total</p>
            <p className="labelAmountTotal">R$ {totalValueFinal.toFixed(2) }</p>
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