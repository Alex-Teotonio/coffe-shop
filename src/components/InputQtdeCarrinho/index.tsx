import { InputQtdeCarrinho } from "./styles";
import {useTheme} from 'styled-components';
import {Minus, Plus} from 'phosphor-react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


interface InputQtdeItensCarrinhoProps {
  marginLeft: string,
  selectedProduct: number,
  qtde: number
}
export function InputQtdeItensCarrinho({marginLeft, selectedProduct, qtde}: InputQtdeItensCarrinhoProps) {
  const theme = useTheme();
  const {incrementQtdeButton, decrementtQtdeButton} = useContext(CartContext)

  function handleAddQtde() {
    incrementQtdeButton(selectedProduct);
  }

  function handleDecrementQtde() {
    decrementtQtdeButton(selectedProduct);
  }
  return (
    
    <InputQtdeCarrinho marginLeft={marginLeft}>
      <button onClick={handleDecrementQtde} ><Minus color={theme['purple-200']}/></button>
      <small>{qtde}</small>
      <button onClick={handleAddQtde}><Plus color={theme['purple-200']}/></button>
    </InputQtdeCarrinho>
  )
}