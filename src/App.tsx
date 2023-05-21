import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './styles/theme/default';
import {GlobalStyle} from './styles/global'
import { Router } from './Router';
import {BrowserRouter} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';
function App() {

  return (
    <>
    <CartContextProvider>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      </ThemeProvider>
      </CartContextProvider>
    </>
  )
}

export default App
