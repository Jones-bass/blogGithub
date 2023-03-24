import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { FetchContextProvider } from './contexts/FetchContext'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FetchContextProvider>
        <GlobalStyle />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </FetchContextProvider>
    </ThemeProvider>
  )
}

export default App
