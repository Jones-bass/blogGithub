import styled from 'styled-components'

export const ContainerMain = styled.div`
  /* Base/Profile */
`

export const ContainerPost = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 67%;

  margin: auto;
`

export const CardPost = styled.div`
  background-color: ${(props) => props.theme.post};
  border-radius: 8px;

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
    font-size: 14px;
    color: ${(props) => props.theme.span};
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
    width: 70%;
    margin-bottom: 1rem;
  }
`
