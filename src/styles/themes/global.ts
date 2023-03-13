import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
  background: ${(props) => props.theme.background};
}

body, input, textarea, button {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme.title};
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`
