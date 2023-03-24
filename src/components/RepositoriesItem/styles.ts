import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import git from '../../assets/git.png'

export const ContainerList = styled(NavLink)`
  position: relative;
  font-family: sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.Text};

  &::before {
    content: '';
    background-image: url(${git});
    background-size: cover;

    position: absolute;
  }

  &::before {
    width: 5rem;
    height: 5rem;
    top: 35%;
    right: 10%;
  }

  &::after {
    content: '';
    position: absolute;
    height: 2rem;
    top: 15%;
    right: 5%;
    border: 1px solid;
  }

  @media (max-width: 720px) {
    &::before {
      width: 2.5rem;
      height: 2.5rem;
      top: 45%;
      right: 10%;
    }

    &::after {
      height: 1rem;
      top: 20%;
      right: 5%;
      border: 1px solid;
    }
  }
`

export const BoxCard = styled.div`
  width: 26rem;
  height: 10rem;
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.222);

  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 0px 10px 0.6px ${(props) => props.theme.blue};
  }

  @media (max-width: 720px) {
    width: 20em;
    height: 6em;
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.1em;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 1rem;
    }
  }

  span {
    font-size: 0.7rem;
    font-weight: 300;

    &:nth-child(3) {
      font-weight: 500;
      margin-right: 0.2rem;
    }

    @media (max-width: 720px) {
      font-size: 0.5rem;
    }
  }
`
