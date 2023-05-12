import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './styles/theme/default';
import {GlobalStyle} from './styles/global'
import { CoffeList } from './components/CoffeList';
function App() {

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Introduction/>
      <CoffeList/>
      </ThemeProvider>
    </>
  )
}

export default App
