import { createGlobalStyle } from 'styled-components'
import img from '../../assets/background.png'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
  background: ${(props) => props.theme.background};
  background-image: url(${img});    
  background-size: cover;
  background-repeat: no-repeat; 
}

a {
  text-decoration: none;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme.title};
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`
