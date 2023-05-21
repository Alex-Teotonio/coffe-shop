import {createContext, ReactNode, useReducer, useState, useEffect} from 'react';
import { arrayCoffes } from '../pages/CoffeList/utils/dataCoffes';

interface CartContextProviderProps {
  children: ReactNode
}

// Define the address interface
export interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
} 

interface Product {
  id: number,
  img: string,
  tags: string[],
  name: string,
  description: string,
  price: string,
  qtde: number
}

interface ActionType {
  product: Product ,
  type: string
}

type Coffe = typeof arrayCoffes

interface CartContexType {
  cart: Coffe,
  coffes: typeof arrayCoffes,
  addItemCart: (idProduct:number) => void,
  incrementQtdeButton: (selectProduct:number) => void,
  decrementtQtdeButton: (selectProduct:number) => void,
  address: Address,
  handleAddress: (name:string, value:string) => void,
  paymentMethod: string,
  handlePaymentMethods: (payment: string) => void
}

export const CartContext = createContext({} as CartContexType) ;
export function CartContextProvider({children}:CartContextProviderProps) {
  const [coffes, setCoffes] = useState(arrayCoffes);
  const [address, setAddress] = useState<Address>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const [cart, dispatch] = useReducer((state:Coffe, action:ActionType) => {
    
    if (action.type === 'add_cart') {
      return [...state, action.product];
    }

    throw new Error('Unknown Action')
  },[{
    id: 0,
    img: '',
    tags: [''],
    name: '',
    description: '',
    price: '',
    qtde: 1
  }],

    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffe-shop:cart-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },)

  function handleAddress(name:string, value:string) {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  }
  function addItemCart(idProduct:number) {
    const productFind = coffes?.find((c) => c.id === idProduct);
    if (!productFind) {
      throw new Error('Product not found');
    }
    dispatch({type: 'add_cart', product: productFind})
  }


  function handlePaymentMethods(payment: string) {
    setPaymentMethod(payment)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffe-shop:cart-1.0.0', stateJSON)
  }, [cart])

  function incrementQtdeButton(selectProduct:number) {
    const newCoffes = coffes.map((coffe) => {
       if(coffe.id === selectProduct) {
        coffe.qtde = coffe.qtde +1
       }
       return coffe
    })

    setCoffes(newCoffes)
  }

  function decrementtQtdeButton(selectProduct:number) {
    const newCoffes = coffes.map((coffe) => {
       if(coffe.id === selectProduct) {
        const newQtde = coffe.qtde -1 
        if(newQtde >= 1)
        coffe.qtde = newQtde
       }
       return coffe
    })

    setCoffes(newCoffes)
  }

  return(
    <CartContext.Provider value={{
      cart,
      coffes,
      addItemCart,
      incrementQtdeButton,
      decrementtQtdeButton,
      address,
      handleAddress,
      paymentMethod,
      handlePaymentMethods
    }}>
        {children}
    </CartContext.Provider>
  )
}