import { 
  CoffeCard,
  CoffeListContainer,
  FooterCard,
  TitlePage
} from "./styles";

import {ShoppingCart} from 'phosphor-react';
import { Introduction } from "../../components/Introduction";
import { InputQtdeItensCarrinho } from "../../components/InputQtdeCarrinho";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export function CoffeList() {

  const {coffes, addItemCart, cart} = useContext(CartContext);
  const arrayCoffes = coffes;

  function handleAddCart(idProduct: number) {
    addItemCart(idProduct)
  }
  
  return (
    <>
    <Introduction/>
    <TitlePage>
      Nossos cafés
    </TitlePage>
    <CoffeListContainer>
     {
      arrayCoffes.map((coffe) => (
        <CoffeCard key={coffe.name}>
          <img src={coffe.img}></img>
          <div className="card-content"> {coffe.tags.map((tag) => <small>{tag.toUpperCase()}</small>)}</div>
          <span>{coffe.name}</span>
          <p>{coffe.description}</p>
          <FooterCard>
            <p>{ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(+coffe.price)}</p>
            <InputQtdeItensCarrinho 
              marginLeft="1.8125rem;"
              selectedProduct={coffe.id}
              qtde={coffe.qtde}
            />
            <button onClick={() =>handleAddCart(coffe.id)} className="shopping-cart">
              <ShoppingCart color="white"/>
            </button>
          </FooterCard>
        </CoffeCard>
      ))
     }
    </CoffeListContainer>
  </>
  )
}