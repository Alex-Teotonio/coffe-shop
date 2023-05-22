import { ContainerCart, ContainerCartValue, ContainerLocation, HeaderContainer } from "./styles";
import coffeLogo from '../../assets/coffeLogo.svg';
import {ShoppingCart, MapPin} from 'phosphor-react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export function Header() {

  const {cart} = useContext(CartContext);
  const totalItems = cart.length;
  return (
    <HeaderContainer>
      <img src={coffeLogo}/>
      <div className="container">
        <ContainerLocation>
          <MapPin/>
          <p>Porto Alegre, RS</p>
        </ContainerLocation>
        <ContainerCartValue>
          <ContainerCart>
            <ShoppingCart/>
          </ContainerCart>
          <small>{totalItems}</small>
          </ContainerCartValue>
      </div>
    </HeaderContainer>
  )
}