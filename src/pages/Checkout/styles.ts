import styled from 'styled-components';

interface InputProps {
  width?: string
}



export const CheckoutParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`


export const CheckoutSubContainerItens = styled.div`
  display: flex;
  gap: 0.9375rem;
  flex-direction: column;
  margin-top: 5rem;

  & > span {
    font-family: 'Baloo 2 ';
    font-weight: bold;
    line-height: 1.3;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-200']};
  }
`
export const CheckoutItensSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  background: ${(props) => props.theme['gray-125']};
  width: 28rem;
  padding: 2.5rem;
  border-radius: 3.375rem 2.75rem;

  .orderConfirm {
    background: ${(props) => props.theme['yellow-200']};
    border-radius: 0.375;
    width: 100%;
    color: white;
    padding: 0.75rem 0.5rem;
    border-radius: 0.375rem;
    border: none;
  }
`

export const CheckoutImageProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.250rem;
  gap: 3.6875rem;
  height: 5rem;
  background: ${(props) => props.theme['gray-125']};

  img {
    width: 4rem;
    height: 4rem;
  }

  .coffeSelected {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    p {
      line-height: 1.3;
      color: ${(props) => props.theme['gray-200']};
    }

    .actionItensSelected {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
`


export const CheckoutContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 10rem;
  margin-top: 2.5rem;
  padding: 2.5rem;

  .titleContainer {
    color: ${(props) => props.theme['gray-200']};
    font-family: 'Baloo 2 ';
    font-weight: bold;
    line-height: 1.3;
    font-size: 1.125rem;
  }
`

export const CheckoutAdress = styled.div`
  margin-top: 0.9375rem;
  width:40rem ;
  height: 23.25rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['gray-125']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  
`

export const ContainerAdressHeader = styled.header`
  .titleLocation {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme['yellow-300']}
    }
  }

  span {
    color: ${(props) => props.theme['gray-150']};
    margin-top: 0.125rem;
    margin-left: 1.5rem;
    }
`
export const ContainerAdressFields = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`


export const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-120']};
  padding: 0.375rem;
  border-radius: 0.25rem ;
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['gray-120']};
`

export const Input = styled(BaseInput)<InputProps>`
  width: ${(props) => props.width};
`

export const InputInline = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 0.725rem;
`


export const ContainerPayment = styled.div `
  margin-top: 0.75rem;
  height: 12.9375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['gray-125']};
  gap: 2rem;
  padding: 2.5rem;
`


export const ContainerPaymentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme['purple-200']};
  }

  .flexTitlePayment {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    p {
      color: ${(props) => props.theme['gray-200']};
      line-height: 1.3;
    }
    span {
      line-height: 1.3;
      color: ${(props) => props.theme['gray-175']};
    }
  }
`

export const PaymentOptions = styled.div `
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 35rem;
  height: 3.1875rem;

  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    background: ${(props) => props.theme['gray-120']};
    width: 11.16rem;
    border-radius: 0.375rem;
    border: none;
    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme['gray-150']};
    }
    svg{
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme['purple-200']};
    }
  }
`



export const CheckoutAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  height: 5.75rem;
  width: 23rem;

`


export const CheckoutAmountItens = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme['gray-200']};
    line-height: 1.3;
  }

  .labelAmount {
    font-size: 0.875rem;
  }

  .labelAmountTotal {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-400']};
    line-height: 1.3;
  }
`