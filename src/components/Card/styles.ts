import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CardPost = styled(NavLink)`
  background-color: ${(props) => props.theme.post};
  border-radius: 8px;
  text-decoration: none;

  margin: 1.2rem;
  padding: 1rem;

  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 0.6px ${(props) => props.theme.blue};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.Text};
  }

  @media (max-width: 720px) {
    width: 90%;
    margin: 0.5rem;

    p {
      font-size: 0.8rem;
    }
  }
`

export const CardText = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  span {
    font-size: 0.6;
    color: ${(props) => props.theme.span};
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 1.3rem;
    width: 70%;
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    width: 80%;

    span {
      font-size: 0.7rem;
    }
    h1 {
      font-size: 0.8rem;
    }
  }
`
