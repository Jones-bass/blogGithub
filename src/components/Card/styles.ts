import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CardPost = styled(NavLink)`
  background-color: ${(props) => props.theme.post};
  border-radius: 8px;
  text-decoration: none;

  margin: 1rem;
  padding: 2rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.Text};
  }
`

export const CardText = styled.div`
  display: flex;
  justify-content: space-between;

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
`
