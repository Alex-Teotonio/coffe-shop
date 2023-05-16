import { 
  CoffeCard,
  CoffeListContainer,
  FooterCard,
  TitlePage
} from "./styles";

import {ShoppingCart} from 'phosphor-react';
import {arrayCoffes} from './utils/dataCoffes';
import { Introduction } from "../../components/Introduction";
import { InputQtdeItensCarrinho } from "../../components/InputQtdeCarrinho";
export function CoffeList() {
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
            <InputQtdeItensCarrinho marginLeft="1.8125rem;"/>
            <button className="shopping-cart">
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