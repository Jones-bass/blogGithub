import styled from 'styled-components'

export const ContainerMain = styled.div`
  /* Base/Profile */
`

export const ContainerPost = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 67%;

  margin: auto;

  @media (max-width: 720px) {
    width: 100%;

    p {
      font-size: 0.8rem;
    }
  }
`
