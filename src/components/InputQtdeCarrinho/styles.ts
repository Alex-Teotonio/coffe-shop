
import styled from 'styled-components'
interface InputQtdeItensCarrinhoProps {
  marginLeft: string
}


export const InputQtdeCarrinho = styled.div<InputQtdeItensCarrinhoProps>`
display: flex;
align-items: center;
justify-content: center;
gap: 0.250rem;
border-radius:0.375rem ;
background: ${(props) => props.theme['gray-120']};
padding: 0.5rem;
 margin-left: ${(props) => props.marginLeft};
 margin-right: 0.5rem;

small {
 color: ${(props) => props.theme['gray-400']};
 line-height: 1.3;
 font-size: 1rem;
}

button{
 border: none;
 background: transparent;
}
`