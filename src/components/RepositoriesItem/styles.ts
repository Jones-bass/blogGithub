import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import git from '../../assets/git.png'

export const ContainerList = styled(NavLink)`
  position: relative;
  display: block;
  text-decoration: none;

  padding: 0.5rem;
  color: ${(props) => props.theme.Text};
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
`

export const BoxCard = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;

  width: 26rem;
  height: 16rem;
  padding: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.222);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 0px 10px 0.6px ${(props) => props.theme.blue};
  }

  @media (max-width: 720px) {
    padding: 1rem;
    height: auto;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    background-image: url(${git});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    right: 0;
    opacity: 0.2;
    border-radius: 10px 10px 0 0;
  }

  h1 {
    font-size: clamp(1rem, 1.5vw, 2rem);
    font-weight: bold;
    margin-bottom: 1rem;

    letter-spacing: 0.1em;
  }

  div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: justify;
    z-index: 1;

    span {
      font-size: clamp(0.7rem, 0.9vw, 2rem);
      line-height: 1.2rem;
    }

    p {
      font-size: clamp(0.6rem, 0.9vw, 1rem);
    }
  }

  > span {
    font-size: clamp(0.8rem, 1vw, 1rem);
    font-weight: 300;
    text-align: right;
  }
`
