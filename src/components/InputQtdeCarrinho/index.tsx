import { InputQtdeCarrinho } from "./styles";
import {useTheme} from 'styled-components';
import {Minus, Plus} from 'phosphor-react';


interface InputQtdeItensCarrinhoProps {
  marginLeft: string
}
export function InputQtdeItensCarrinho({marginLeft}: InputQtdeItensCarrinhoProps) {
  const theme = useTheme()
  return (
    
    <InputQtdeCarrinho marginLeft={marginLeft}>
      <button><Minus color={theme['purple-200']}/></button>
      <small>1</small>
      <button><Plus color={theme['purple-200']}/></button>
    </InputQtdeCarrinho>
  )
}