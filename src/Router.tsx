import {CoffeList} from './pages/CoffeList';

import {Route, Routes} from 'react-router-dom'
import { Checkout } from './pages/Checkout';
import { Layout } from './components/layout/DefaultLayout';
import { OrderConfirmed } from './pages/OrderConfirmed';


export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<CoffeList/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/order-confirmed' element={<OrderConfirmed/>}></Route>
      </Route>
    </Routes>
  )
}