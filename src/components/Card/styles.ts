import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CardPost = styled(NavLink)`
  background-color: ${(props) => props.theme.post};
  border-radius: 8px;
  text-decoration: none;

  margin: 3%;
  padding: 5%;

  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 0.6px ${(props) => props.theme.blue};
  }

  p {
    font-size: clamp(0.7rem, 1vw, 1rem);
    text-align: justify;
    color: ${(props) => props.theme.Text};
  }
`

export const CardText = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4fr 1fr;
  padding: 1%;

  span {
    font-size: clamp(0.6rem, 1vw, 1rem);
    color: ${(props) => props.theme.span};
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-size: clamp(0.9rem, 1.3vw, 2rem);
    margin-bottom: 1rem;
  }
`
