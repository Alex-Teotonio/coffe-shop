import { ContainerCart, ContainerLocation, HeaderContainer } from "./styles";
import coffeLogo from '../../assets/coffeLogo.svg';
import {ShoppingCart, MapPin} from 'phosphor-react';
export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo}/>
      <div>
        <ContainerLocation>
          <MapPin/>
          <p>Porto Alegre, RS</p>
        </ContainerLocation>
        <ContainerCart>
          <ShoppingCart/>
        </ContainerCart>
      </div>
    </HeaderContainer>
  )
}