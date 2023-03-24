import styled from 'styled-components'

export const ContainerRepo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 65%;

  margin: auto;
  margin-top: 2rem;

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
