import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './contexts/auth'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <GlobalStyle />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
